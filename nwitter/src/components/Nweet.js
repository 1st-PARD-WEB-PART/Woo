import { deleteDoc , doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { dbService } from "../fbase";
import { getStorage,deleteObject,ref } from "firebase/storage";


const NNweet=({nweetObj,isOwner})=>{
    const [editing, setediting] = useState(false);
    //nweet를 수정하고 있는지 아닌지
    const [newNweet,setNewNweet] = useState(nweetObj.text); // default로 text를 설정
    // input의 값 수정가능
    const onDeleteClick= async()=>{
        const ok = window.confirm('Are you sure want to delete this newwt?');
        console.log(ok)
        
        
        if (ok){
        await deleteDoc(doc(dbService,"nweets",`${nweetObj.id}`))
        //firebase안에 컬렉션 내부의 지우고 싶은 doc의 id
        //텍스트 지울때 사용

        const storage=getStorage();

        await deleteObject(ref(storage,nweetObj.attachmentURL))
        //사진이나 파일등 텍스트 아닌내용 지울때 사용
        }
    };


const toggleEditing= ()=>setediting((prev)=>!prev)  // 이전 값과 반대로설정

const onSubmit1=async (e)=>{
e.preventDefault();
await updateDoc(doc(dbService,"nweets",`${nweetObj.id}`),
{text:newNweet,
});
setediting(false);
};
const onChange=(e)=>{
    const {
        target : {value},
    } =e;
    
    setNewNweet(value);


}  ;  



return(

    <div >

        {editing ? 
        
        (
<>
        <form onSubmit={onSubmit1}>
            <input type='text' placeholder="Edit your nweet" value={newNweet}
            onChange={onChange}
            />
            <input type='submit' value="수정"></input>
        </form>
        <button onClick={toggleEditing}>Cancel</button>
        </>

        )
        :
        (
        <>
         <h4>{nweetObj.text}</h4>
            {nweetObj.attachmentURL && 
            <img src={nweetObj.attachmentURL} width="50px" height="50px"></img>
            } {/*attachmentURL를 가지고 있을때만 실행 몇몇 nweet는 attachemtnurl이 없을 수있으므로*/}
         {isOwner &&(
         <>
                 <button onClick={onDeleteClick}>Delete Nweet</button>
          <button 
          onClick={toggleEditing}
          >Edit Nweet</button></> )
          } </>)
        }
       


                </div>
                );
};

export default NNweet;