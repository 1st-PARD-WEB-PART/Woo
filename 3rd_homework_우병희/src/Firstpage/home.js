import React from "react";
import FForm from "./Loginform";
import Loginscreen from "./Loginscreen";
import Footer from "./Footer";
import {Connect,FFaceboo} from "./Connectwith";
import CrePage from "./Createapage";
import { Faceboook } from "../AfterLogin/Call";






function Home(){



 


    return(
        <div>
        
            <Loginscreen> 
                <FForm></FForm>

           
           <CrePage> <b> Create a Page </b>for a celebrity, brand or business. </CrePage>
           <FFaceboo>FaceBook</FFaceboo>
            <Connect>Connect with friends and the world around you on Facebook.</Connect>
 
         
            </Loginscreen>
      

            

        <Footer></Footer>

              
                  
        </div>
    )
}

export default Home;