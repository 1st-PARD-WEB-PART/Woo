import React,{useState} from "react";
import { useEffect } from "react";

import styled,{createGlobalStyle,css} from "styled-components";
const bgColor = '#fff';

// 스크롤 될 때 변경될 배경색상을 변수로 지정합니다.
const scrollColor = 'red';
const GlobalStyle= createGlobalStyle`

body { /*웹 화면에 전체 header부분 제외*/
    /* scroll prop 값에 따라 배경색상이 변경됩니다. */
    background-color: ${props => props.scroll ? scrollColor : bgColor};
    /* 배경색상이 자연스럽게 변경되도록 transition 속성을 추가합니다. */
    transition: background-color 0.5s ease-in-out;
    // 바뀌는 구조 중하나 ease-in-out

  };

  span{
    color:white;
    left:35%;
    top:500px;
  };
`


const ScrollDetector=()=>{

    const [scroll,setScroll]= useState(false)


    useEffect(()=>{

        const handScroll=()=>{
            const currentScrooly=window.scrollY;

            const scrollThreshold=10;

            if(currentScrooly>scrollThreshold){
               
                setScroll(true);
            }else{
                setScroll(false);
            }
        };

        window.addEventListener('scroll',handScroll);

        return()=>{

            window.removeEventListener('scroll',handScroll);
        }
    },[]);


    return <GlobalStyle>
    </GlobalStyle>
};


const StyledText = styled.div`

left:40%;
position: absolute;



visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '1' : '0'};
  transition: opacity 4s ease-in-out;
`;



export {ScrollDetector,StyledText}