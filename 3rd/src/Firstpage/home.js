import React from "react";
import { Link } from "react-router-dom";
import Button from "./LoginButton";
import Passtext from "./passtext";
import Emailtext from "./Emailtext";
import Form from "./Navdiv";
import Loginscreen from "./Loginscreen";
import Ptext from "./Forgotpass";
import CreButton from "./CreateButton";
import Logintext from "./Logintext";
import CreText from "./CreateText";
import Footer from "./Footer";
import LangLink from "./LangLink";
import Lang from "./Language";
import Vec from "./vector";
import Links from "./Link";
import Meta from "./Meta";
import Connect from "./Connectwith";
import CrePage from "./Createapage";
import Line from "./Line";
import LanguageUl from "./Languageul";
import {GoDiffAdded} from 'react-icons/go';
import LoginBottom from "./Languageulmui";


function Home(){

    const languages = [
        <li>English(US)</li>,<li>한국어</li>, <li>日本語</li>, <li>Deutsch</li>,
        <li>Português(Brasil)</li>,<li> Français(France)</li>,
        <li>Español</li>, <li>Italiano</li>, <li>العربية</li>,<li>हिन्दी</li>,<li><GoDiffAdded></GoDiffAdded></li>
    ]

    const Linkks=[
        <li>Privacy</li>,<li>Careers</li>,<li>Developers</li>,<li>Create Page</li>,
        <li>Create Ad</li>,<li>About</li>,<li>Groups</li>,<li>Help</li>,<li>Terms</li>,
        <li>Ad choices</li>,<li>Cookies</li>,
        <li>Voting Information Center</li>,<li>Services</li>,<li>Fundraisers</li>,<li>Local</li>,<li>Bulletin</li>
        ,<li>Instagram</li>,<li>Portal</li>,<li>Oculus</li>,<li>Facebook Play</li>,
        <li>Marketplace</li>,<li>Games</li>,<li>Places</li>,<li>Places</li>,<li>Watch</li>
        ,<li>Facebook Lite</li>,<li>Messenger</li>,<li>Messenger</li>,<li>Log In</li>
        ,<li>Log In</li>,<li>Sign Up</li>
        ,<li>Sign Up</li>
    
        ]

    return(
        <div >
            <Loginscreen> 

           
<Form>           


             <p>
            <Emailtext type='text' placeholder="Email or phone number"></Emailtext>
            </p>
            
            <p>
            <Passtext type='password' placeholder="Password"></Passtext>
            </p>

            <p>
            <Button to='/content'> <Logintext>Login</Logintext></Button>
            </p>
            <Ptext>Forgot password? </Ptext> 
            <CreButton><CreText>Create new account</CreText></CreButton>
            <Line></Line>


            </Form>
            <CrePage> <b> Create a Page </b>for a celebrity, brand or business. </CrePage>

            <Connect>Connect with friends and the world around you on Facebook.</Connect>
 
         

      

            

              <Footer>
               
                    <Lang>

                    <LanguageUl>
                            {languages}
                        </LanguageUl>
                       
                    </Lang>
                    
                    <Vec></Vec>
                    <Links>
                    <LanguageUl>
                            {Linkks}
                        </LanguageUl>
                    </Links>
                

                <Meta>Meta © 2022</Meta>
              
                  </Footer>
              </Loginscreen>
                  
        </div>
    )
}

export default Home;