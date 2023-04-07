import { useState } from 'react';
import {Link, Outlet} from 'react-router-dom'
import Navbar from './Nav';
import Screen from './Screen';
import {AiFillHome} from 'react-icons/ai'
import {IoPeopleCircleOutline,IoGameControllerOutline} from 'react-icons/io5'

import People from './People';
import Game from './Game';
import Img from './Img';
import Search from './Search';
import Homepage from './Homepage';
import Lline from './line';



const Content=()=>{

    const [currentTab,setcurrentTap]= useState('homepage')

    const changeUnderline=(e)=>{
        setcurrentTap(e.target.value);
        
    }
    return(
        <div>
           
            
     <Navbar>           
     <Img src='/img/Facebook_logo.png' onClick={()=>{
       window.location.href='/'
     }}></Img>
     <Search type='search' placeholder='FaceBook 검색'></Search>
     
        
            <Homepage to='/content/1/homepage'  
            
            value='homepage'
            onClick={changeUnderline
           
            }
            ><AiFillHome
            /></Homepage>
            


            
           <People to='/content/2/people'
          
          value='people'
           onClick={changeUnderline
           }
           ><IoPeopleCircleOutline/></People>
           

          <Game to='/content/3/game'
          
         value='game'
          onClick={changeUnderline
          }
          ><IoGameControllerOutline/></Game>
          
    </Navbar>

        <Screen>
      
       <Outlet/>
     
       
       </Screen>
       
       </div>
    )
}

export default Content;