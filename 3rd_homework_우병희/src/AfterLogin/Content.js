import { useState } from 'react';
import {Link, Outlet} from 'react-router-dom'


import Screen from './Screen';
import {AiFillHome} from 'react-icons/ai'
import {IoPeopleCircleOutline,IoGameControllerOutline} from 'react-icons/io5'
import styled from 'styled-components';
import People from './People';
import Game from './Game';
import Img from './Img';
import Search from './Search';
import Homepage from './Homepage';

import {TiMessages} from "react-icons/ti"
import {FiPhoneCall} from "react-icons/fi";
import {BsFacebook} from "react-icons/bs";


const Content=()=>{

    const [currentTab,setcurrentTap]= useState('homepage')

    const changeUnderline=(e)=>{
        setcurrentTap(e.target.value);
        
    }

    const Navbarleft=  styled.div`
    display:flex;
    height:40px;
    width:10%;
    flex-direction: row;
    align-items: center;
    
    gap:10px;
   
    
    `

    const Navbarmiddle=  styled.div`

    position: absolute;
    display:flex;
    width:50%;
    height:40px;
    flex-direction: row;
    align-items: center;
    gap:90px;
    
    left: 42.81%;


    `

    const Navbarright=  styled.div`

    position: absolute;
    display:flex;
    width:40%;
    height:40px;
    flex-direction: row;
    align-items: center;
    gap:15px;
    
    left: 92%;


    `
    const Navbar=styled.div`

width: 100%;
height: 40%;
display:flex;
flex-direction:column;
 


background: #FFFFFF;
`


    return(
        <div>
           
            
     <Navbar> 


        <Navbarleft>          
     <Img src='/img/Facebook_logo.png' onClick={()=>{
       window.location.href='/'
     }}></Img>

     <Search type='search' placeholder='FaceBook 검색'></Search>


     <input type='submit' placeholder='검색'></input>
    
     </Navbarleft>

     <Navbarmiddle>
            <Homepage to='/content/1/homepage'  
            
            value='homepage'
            onClick={changeUnderline
                
            }
            ><AiFillHome
            size={22}
            style={{color:'blue'}}
            /></Homepage>
            
            {/* 두개로 나눠서 합치고 div라는 styled component를 만들어서 한다.*/}
            {/*map을 통해 링크를 받아서 가져온다*/}


            
           <People to='/content/2/people'
          
          value='people'
           onClick={changeUnderline
           }
           ><IoPeopleCircleOutline
           size={22}
           style={{color:'blue'}}
           /></People>
           

          <Game to='/content/3/game'
          
         value='game'
          onClick={changeUnderline
          }
          ><IoGameControllerOutline
          size={22}
          style={{color:'blue'}}
          /></Game>
           </Navbarmiddle>

           <Navbarright>
            <TiMessages  style={{color:'blue'}} size={22}/>
            <FiPhoneCall style={{color:'blue'}} size={22}/>
            <BsFacebook style={{color:'blue'}} size={22}/>
            

           </Navbarright>


    </Navbar>


    <Screen>
      
       <Outlet/>
     
       
       </Screen>
       
       </div>
    )
}

export default Content;