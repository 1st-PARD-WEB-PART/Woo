import styled from 'styled-components';
import {AiFillHome} from 'react-icons/ai'
import{IoIosPeople} from 'react-icons/io'
import {CgGames} from "react-icons/cg";
import People from './People';
import Game from './Game';
import Img from './Img';
import Search from './Search';
import Homepage from './Homepage';
import { useState } from 'react';
import {TiMessages} from "react-icons/ti"
import {FiPhoneCall} from "react-icons/fi";
import {BsFacebook} from "react-icons/bs";
import {Navbarr,Navbarleft,Navbarmiddle,Navbarright} from "./Navbarstyle"





function Navvbar(props){
    const [currentTap,setcurrentTap] = useState('homepage')




const IconWrapper = styled.span`
   // 아이콘의 너비를 설정
   width: 100px;
   color:#717171;
   .icon {
    transition: border-bottom 0.3s ease ;
   }
  
   .active {
    color:blue ;
    width: 100px;
    padding:10px;
    border-bottom: 4px solid blue;
   }

 
   
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /*
  & :hover {
  width: 100px;
    color:  ${props => props.change || 'skyblue'};
    /*
    //border-bottom : ${props => (props.value === 'homepage' ? '2px solid blue' : '')}
        
}
*/


`;
const handleClick=(icon)=>{
    setcurrentTap(icon)
}
const [iinformation,setinformation] = useState('')
return (
    <Navbarr> 

        <Navbarleft onSubmit={(e)=>{
            e.preventDefault();
            alert(iinformation)
        }}>
                    
     <Img src='/img/Facebook_logo.png' onClick={()=>{
       window.location.href='/'
     }}></Img>

     <Search type='search' placeholder='FaceBook 검색' value={iinformation} 
     onChange={(e)=>{
        setinformation(e.target.value);
     }}
     ></Search>


     <input type='submit' placeholder='검색'></input>
     
     </Navbarleft>

     <Navbarmiddle>
            <Homepage to='/content/1/homepage'  
            
            value='homepage'
            onClick={() => handleClick('homepage')

        }

            >
                <IconWrapper 
                
                ><AiFillHome
            size={22}
            
            className={ `icon ${currentTap === 'homepage'?'active':''}`}
            />
            </IconWrapper>
            </Homepage>
            
            {/* 두개로 나눠서 합치고 div라는 styled component를 만들어서 한다.*/}
            {/*map을 통해 링크를 받아서 가져온다*/}


            
           <People to='/content/2/people'
          
          value='people'
          onClick={() => handleClick('people')}
         
  
           >
            <IconWrapper>
            <IoIosPeople
           size={22}
         
           className={ `icon ${currentTap=== 'people'?'active':''}`}
           />
           </IconWrapper>
           </People>
           

          <Game to='/content/3/game'
          
         value='game'
         onClick={() => handleClick('game')}
   
         
          >
            <IconWrapper>
            <CgGames
          size={22}
          
          className={ `icon ${currentTap === 'game'?'active':''}`}
          />
          </IconWrapper>
          </Game>

           </Navbarmiddle>

           <Navbarright>
            <TiMessages  style={{color:'blue'}} size={22}/>
            <FiPhoneCall style={{color:'blue'}} size={22}/>
            <BsFacebook style={{color:'blue'}} size={22}/>
            

           </Navbarright>


    </Navbarr>

)
};

export default Navvbar;
