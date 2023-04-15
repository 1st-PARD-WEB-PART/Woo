import styled, { keyframes } from "styled-components";
import {Link} from 'react-router-dom';

const grow=keyframes`
from{
    transform: scale(1);
}to{
    transform: scale(2);
}
`
const Game= styled(Link)`

   cursor:${props=>props.disabled ? 'not-allowed':'pointer'};
   &:focus{
    outline:2px solid blue;
}

//animation: ${grow} 1s ease-in-out;
// transition: ${grow} 1s ease-in-out; 렌더링할때 구현안됨
   &:hover{
    //animation: ${grow} 0.2s ease-in-out;;
    transform: scale(1.5);
    //transition: ${grow} 1s ease-in-out;

   }




`

export default Game;