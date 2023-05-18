import React, { useEffect, useState } from "react";
import { dbService } from "../fbase";
import { collection, onSnapshot, orderBy,query } from "firebase/firestore";
import NNweet from "../components/Nweet";

import NweetFactory from "../components/Nweetfactory";

const Home=({UserObj})=>{
    const [nweets,setnweets] = useState([]);

    /*
    const getNweets= async()=>{
        const querySnapshot = await getDocs(collection(dbService,"nweets"));
        querySnapshot.forEach((doc)=>{
//querySnapshot은 많은 것을 가지고 있음 그래서 우리가 원하는거 볼려면 document.data()로 부르기
      
const nweetObject={
    ...doc.data(),
    id:doc.id,
   
};

setnweets((prev)=>[nweetObject,...prev]); 
    //배열 리턴 document data와 이전에 값들을 리턴
    });
    };
*/
    useEffect(()=>{
        //getNweets(); 
        /* 순서 상관 없이 입력되어서 화면에 배열됨
        onSnapshot(collection(dbService,'nweets'),(snapshot)=>{
            const nweetArr = snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }));
            setnweets(nweetArr)
        });
        */
       // 화면에 배열되는 순서로 나옴
    const q =query(
        collection(dbService,'nweets'),orderBy("createdAt","desc")
    ); // nweets에서 정보를 받고


        onSnapshot(q,(snapshot)=>{
            const nweetArr = snapshot.docs.map((doc)=>({
                //기본적으로 데이터 베이스에 일이 있을 때 알람을 받는 것
                id:doc.id,
                ...doc.data(),
                //snapshot을 받을 때 배열을 만들고
            }));
            setnweets(nweetArr) // 만들어진 배열을 setnweets로 받음
        });

    },[]);
    











    return(
        <div>

        

<NweetFactory UserObj={UserObj}/>



{nweets.map((data,id)=> (// nweets가 배열이므로
        
        <NNweet key={id} nweetObj={data}  // data의 data nweetObj
        isOwner={data.creatorID===UserObj.uid}  // isOwner dynamic data true or false
        //Userobj로 user로그인을 받으므로 누가 로그인 했는지 알 수 있다.
        //data를 만든 사람 creatorID와 UserObj.uid가 같으면 true
        
        />))
        }

      
            
            
            </div>

    )
};

export default Home;