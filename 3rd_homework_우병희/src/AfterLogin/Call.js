import styled, { keyframes } from "styled-components";

const rotate= keyframes`
from {
    transform: rotate(0deg);
}to{

    transform: rotate(360deg);
}


`
const Call=styled.button`
width: 50px;
border: none;
cursor: pointer;
background-color: white;
&:hover{
    animation: ${rotate} 2s linear infinite;
}

`
const Message= styled.button`
width: 50px;
background-color: white;
cursor: pointer;
border: none; 
//border-radius: 4px;
&:hover{

    animation: ${rotate} 2s linear infinite;
}
`

const Faceboook=styled.button`
width:50px;
border: none;
background-color: white;
cursor: pointer;
&:hover{
animation: ${rotate} 2s linear infinite;
}
`
const Div= styled.div`

overflow-x: hidden;
`
export {Call,Message,Div,Faceboook};