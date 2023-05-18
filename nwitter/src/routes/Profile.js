import React, { useEffect, useState } from "react";
import { authService, dbService } from "../fbase";
import { useNavigate, useSearchParams } from "react-router-dom";
import { collection, onSnapshot, orderBy, query,where, getDocs } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

const Profile = ({refresher,UserObj})=>{

     const [newDisplayName,setnewDisplayName] = useState(UserObj.displayName);
// 1. 로그인한 유저 정보 prop으로 받기

    const navigate= useNavigate();
    const onLogOutClick=()=>{
    authService.signOut();
    navigate("/",{replace:true});
    
     
};
//where은 필터링
//2. 내 nweets얻는 function생성
const getMyNweets =  async()=>{
//nweets얻는 법을 알려줌

    //3.트윗 불러오기 
    //3-1 dbService의 컬렉션 중 "nweets" Docs에서 userObj의 uid와 동일한 creatorID를
    // 가진 모든 문서를 내림차순으로 가져오는 쿼리(요청생성)
const q = query(
    collection(dbService,'nweets'),
where("creatorID","==",`${UserObj.uid}`),
orderBy("createdAt","desc")
);

//3-2. getDocs()메서드로 쿼리 결과 값 가져오기
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    console.log(doc.id,"=>",doc.data());
    
});

 };


useEffect(()=>{
    getMyNweets();
},[])

const onChange=(e)=>{
    const {
        target:{value},}
        = e;
        setnewDisplayName(value);
    };

const onSubmit=async(e)=>{
    e.preventDefault();

    // UserObj.displayName이랑 newdisplayName이같으면 아무 변경사항 없음
    if (UserObj.displayName !== newDisplayName){

        await updateProfile(authService.currentUser,{displayName: newDisplayName});
        //update후에 refresher, profile을 새로고침
        refresher();
        //바로 렌더링되지 않음
        //user가 객체로 불러오기엔 무거워서 특정하게 해야한다
        //App.js로 다시 고고
    }


};
return(
    <>
    <form onSubmit={onSubmit}>

        <input type='text' placeholder="Display Name" value={newDisplayName}
        onChange={onChange}
        />
        <input type='submit' value="Update profile" />
    </form>
    <button onClick={onLogOutClick}>Log out</button>
    {/*Logout은 되었지만 url은 바뀌지 않음*/}
    </>



)};


export default Profile;