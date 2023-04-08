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
        'English(US)','한국어', '日本語', 'Deutsch',
        'Português(Brasil)',' Français(France)',
        'Español', 'Italiano', 'العربية','हिन्दी',<GoDiffAdded></GoDiffAdded>
    ]


    /*
    [
        'English(US)>'English(US)</>,<li>한국어</li>, <li>日本語</li>, <li>Deutsch</li>,
        <li>Português(Brasil)</li>,<li> Français(France)</li>,
        <li>Español</li>, <li>Italiano</li>, <li>العربية</li>,<li>हिन्दी</li>,<li><GoDiffAdded></GoDiffAdded></li>
    ]
*/
    const Linkks = [
        "Privacy","Careers","Developers","Create Page",
    "Create Ad","About","Groups","Help","Terms",
    "Ad choices","Cookies",
    "Voting Information Center","Services","Fundraisers","Local","Bulletin"
    ,"Instagram","Portal","Oculus","Facebook Play",
   'Marketplace','Games','Places','Places','Watch'
    ,'Facebook Lite','Messenger','Messenger','Log In'
    ,'Log In','Sign Up'
    ,'Sign Up']




    return(
        <div style={{overflowX:'hidden'}}>
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
 
         
            </Loginscreen>
      

            

              <Footer>
               
                    <Lang>
                    
                        {languages.map((Language)=>(

<LanguageUl>{Language}</LanguageUl>
))}

                    </Lang>
                    
                    <Vec></Vec>


                    <Links>

                    {Linkks.map((Link)=>(

<LanguageUl>{Link}</LanguageUl>

))}
                    </Links>
                

                <Meta>Meta © 2022</Meta>
              
                  </Footer>

              
                  
        </div>
    )
}

export default Home;