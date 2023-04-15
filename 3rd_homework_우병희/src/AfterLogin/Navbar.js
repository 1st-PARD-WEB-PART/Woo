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
import "./Placehorder.css"
import {Call, Faceboook, Message} from './Call';





function Navvbar(props){
    const [currentTap,setcurrentTap] = useState('homepage')




const IconWrapper = styled.span`
   // 아이콘의 너비를 설정
      
   width: 100px;
   
   color:#717171;
   .iccon {
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
    // maring,border,width등 전체 width에 방해되는 속성있으면 width가 초과되어 나타남
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


     <input  type='submit' placeholder='검색'></input>
     
     </Navbarleft>

     <Navbarmiddle>
            <Homepage to='/content/homepage'  
            
            value='homepage'
            onClick={() => handleClick('homepage')

        }

            >
                <IconWrapper 
                
                ><AiFillHome
            size={22}
            
            className={ `iccon ${currentTap === 'homepage'?'active':''}`}
            />
            </IconWrapper>
            </Homepage>
            
            {/* 두개로 나눠서 합치고 div라는 styled component를 만들어서 한다.*/}
            {/*map을 통해 링크를 받아서 가져온다*/}


            
           <People 
            
           to='/content/people'
          
          value='people'
          onClick={() => handleClick('people')}
         
  
           >
            <IconWrapper>
            <IoIosPeople
           size={22}
         
           className={ `iccon ${currentTap=== 'people'?'active':''}`}
           />
           </IconWrapper>
           </People>
           

          <Game to='/content/game'
          
         value='game'
         onClick={() => handleClick('game')}
   
         
          >
            <IconWrapper>
            <CgGames
          size={22}
          
          className={ `iccon ${currentTap === 'game'?'active':''}`}
          />
          </IconWrapper>
          </Game>

           </Navbarmiddle>

           <Navbarright>

            <Message>
         <TiMessages  style={{color:'blue'}} size={22}/>
                            </Message>

            <Call> <FiPhoneCall style={{color:'blue'}} size={22}/>
            </Call>
            
            <Faceboook>           
                <BsFacebook style={{color:'blue'}} size={22}/>
            
            </Faceboook>
 
           </Navbarright>


    </Navbarr>

)
};

export default Navvbar;
