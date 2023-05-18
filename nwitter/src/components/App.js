import AppRouter from "./Router";
import React,{ useEffect, useState } from "react";
import {authService} from "../fbase"
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { updateProfile } from "firebase/auth";

function App() {
  const [init,setinit] =useState(false);
  const[isLoggedin,setisLoggedin] = useState(false);
const [UserObj,setUserObj] =useState(null);
//onAuthStateChanged면 우리가 받을 user에 useObj를 넣음

  // 어플리케이션이 로드되었을때 firebase는 사용자가 로그인 되었는지 아닌지 확인할 
  //시간이 없다 너무 빨리 일어나므로  어플리케이션 시작시 항상 로그아웃시
  // 바로 로그아웃 firebase가 초기화 되고 모든걸 로드 할때끼지 기다릴 시간이 없다
 
  //firebase가 프로그램을 초기화 하길 기다려한다 . useeffectㅏ용
  useEffect(()=>{
    //사용자의 로그인 상태를 관찰하는 관찰자 추가 event listner로서
    // 사용자가 진짜 로그아웃하거나 계정을 생성할 때도 트리거가 된다
    // firebase초기화시에도 나타남
    const auth= getAuth();
    onAuthStateChanged(auth,(user)=> //로그인 로그아웃시 발생, application 초기화 시 발생
    {if(user){
      setisLoggedin(true);
      
      
      setUserObj({
        displayName : user.displayName,
        uid: user.uid,
        updateProfile: (args)=> updateProfile(user,{displayName:user.displayName}),
        //이 function은 rerturn 값으로 우리한테 진짜 user.updateProfile을 줄것

        
      }) // user로 가져오지 말고 특정하게 가져와야 한다
      //setUserObj(user); //onAuthStateChanged면 우리가 받을 user에 useObj를 넣음
      // 로그인되면 이게 호출, 로그인한 user를 받게 된다.
      // 어딘가에 user저장,  user 호출 가능
      //uset를 얻으면 로그인되고 그리고 setUserObj로 user를 받느다.


     
        }else{
          //setisLoggedin(false);
          setUserObj(null);
        }
        setinit(true);   //application이 언제 시작해도 onAuthStatedChange가 실행돼야 함
        //application이 시작되고 준비도면 setinit을  true로 한다
        //
       }
    
    );
    //실제로 로그인 되었는지 아닌지 알 수있다.

  },[]) // deps를 비워서 프로그램이 초기에 렌더링 될때만 사용하도록하게함


  const refresher = ()=>{
    const user= authService.currentUser;
    setUserObj({
      displayName : user.displayName,
      uid: user.uid,
      updateProfile: ()=> updateProfile(user,{displayName:user.displayName}),
      //이 function은 rerturn 값으로 우리한테 진짜 user.updateProfile을 줄것

      
    }); 
    
    // user를 refresh하는 역할
    // profile.js에 있는 updateprofile을 사용하게 되면 firebase에 있는 user를 새로고침
    // 우리의 headr,우리의 navigation은 firebase쪽이 연결안됨  navigation은 userObj에 연결되있음
    // object가 커서 특정하게 해야 한다
    //
  }
  return (
    <>
   {init ? <AppRouter
   refresher={refresher} // appRouter가 refresguser기능을 가짐
   isLoggedin={isLoggedin}    UserObj={UserObj}/> 

   : "Intializing..."}

   {/*초기화 되었다면  <AppRouter isLoggedin={isLoggedin}/> 
   아직 안되고 되고 있는 주잉라면 Initializing...*/}
   {/*IndexDB에서 지우면 로그아웃된다.*/}
    {/*<footer>&copy; Nwitter {new Date().getFullYear()} </footer>*/}
    
    </>
  );
}

export default App;
