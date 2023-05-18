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
import AuthForm from "../components/AuthForm";


const Auth=()=>{



    const onSocialclick= async (event) =>{
        const {

            target:{name},
         } =event;
         let provider;

            if (name==='google'){
                provider = new GoogleAuthProvider();

            } else if (name==='github'){
                provider = new GithubAuthProvider();
            }

            if (provider){
            const data =await signInWithPopup(authService,provider);
            console.log(data);
            }

        
        
    } 
    return(

        <div>
            <AuthForm/>
            <button name="google"
            onClick={onSocialclick}
            >Continue with Google</button>
            <button name='github'
            onClick={onSocialclick}
            >  Continue with Github</button>
           

        </div>

    )
}

export default Auth;