import React, { useState } from "react";
import { authService,firebaseInstance, 
} from "../fbase";

import { createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,


} from "firebase/auth";

const AuthForm = ()=>{
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [account,setaccount] = useState(true);
    const [error,seterror] = useState("");


    const onChange=(e)=>{ // e는 무슨 일이 일어났는가?
        // 여기서는 input이 변경된 것
        const {target :{name,value}} =e; //event로 부터 많은 정보 얻고 input이 변경된 부분
         // name은 내가 부가 한 값 
         // value는 키보드를 통해 입력한 값, state 값들을 변경 이를 value로 설정
        if (name === "email"){
            setemail(value);
        } else if (name==='password'){
            setpassword(value);
        }
    };
    const onSubmit= async (e)=>{
        e.preventDefault();
        try{
            let data1;
            if(account){
                //create account
          const auth= getAuth();
           data1 = await createUserWithEmailAndPassword(
            auth,email,password
            );
    
            }else{
                //Log in 
                const auth= getAuth();
                data1= await signInWithEmailAndPassword(
                    auth,email,password
                );
            }
            console.log(data1);
           
        }catch(error){
            console.log(error);
            seterror(error.message)
        }
       

    };
    const toggleAcount=()=> setaccount((prev)=> !prev);
    //기존 account값을 반대로 하는 값으로 설정

    return(
        <>
        <form onSubmit={onSubmit}>
                <input 
                name='email'
                type='text' placeholder="email"
                value={email}
                onChange={onChange}
                />
                <input 
                name='password'
                type='password' placeholder="password"
                value={password}
                onChange={onChange}
                />
                <input type='submit' value={account ? 'Create Account':"Log in"}/>
                {error}

        
            </form>
            <span onClick={toggleAcount}>{account ? 'Signin in' :'Create Account'}</span>
    
            </>
    )
}

export default AuthForm;