import React, {  useState } from "react";
import { dbService,StorageService } from "../fbase";
import { collection,addDoc} from "firebase/firestore";

import { v4 as uuidv4 } from "uuid";
import { uploadString,ref, getDownloadURL } from "firebase/storage";

const NweetFactory= ({UserObj})=>{
    console.log(UserObj);
    const [Nweet,setNweet] = useState('');

    const [attachment,setattachment] = useState("");
    const onSubmit= async (e)=>{
        e.preventDefault();
        
        let attachmentURL="";
        if(attachment!==""){
        
            //Nweet먼저 말고 사진을 먼저 업로드
        const attachmentref= ref(StorageService,`${UserObj.uid}/${uuidv4()}`)
        const response= await uploadString(attachmentref,attachment,"data_url")
        //attachment의 string은 이미지 전체, formaet "data_url" readAsDataURL에서 한것
        attachmentURL= await getDownloadURL(response.ref)
        }
        
        
        const nweeett= {
            //어떤 collection에 네 데이터를 저장할지 지정하는 건 아주 중요
            
                    text:Nweet, //state인 Nweet의 value
                    createdAt:Date.now(),
                    creatorID:UserObj.uid, // 누가 쓴것인지 알 수 있다.
                    attachmentURL,
            
            
                }
        
        
        await addDoc (collection(dbService,'nweets'),nweeett);
            setNweet(''); //빈 문자열로 만듬*/
         setattachment('');
            
        
        };
        
        
        const onChange=(e)=>{
            const {target:{value},}=e; //e.target.value 생성과정
           
                setNweet(value)};
        
        
        const onFileChange=(e)=>{
        
            const {
                target:{files},
        }=e;
        
        const theFile= files[0]; // file 하나만 넣을 것
        const reader= new FileReader();
        //event listner를 file reader에 추가
        reader.onloadend=(finishedEvent)=>{ //file 다 읽으면 eventlistner받고 실행
            const {currentTarget:{result},} =finishedEvent;
            console.log(finishedEvent);
            setattachment(result);
        }
        reader.readAsDataURL(theFile);//file을 읽기 시작하고
        
        };
        
        const ClearAttachment=()=>{setattachment("")}; // image clear, attachment를 null
    return(
    <>
<form onSubmit={onSubmit}>
<input onChange={onChange} value={Nweet} type='text' placeholder="What's on your mind?"
maxLength={120} ></input>
<input type='file' accept="image/*"
onChange={onFileChange}
/> {/*어떤 종류의 이미지라도 이미지여야 한다*/}
<input type='submit' value='Nweet' ></input>
{attachment && 
<div>  
<img src={attachment} width="50px" height="50px"></img>
<button onClick={ClearAttachment}>이미지삭제</button>
</div>
} 


</form>
</>
)};

export default NweetFactory;