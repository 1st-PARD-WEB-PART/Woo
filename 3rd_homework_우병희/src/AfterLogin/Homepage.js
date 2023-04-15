import styled, { keyframes } from "styled-components";
import {Link} from 'react-router-dom'


const grow= keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(5);
  }
`
const Homepage= styled(Link)`

/*
& :hover{
   
    color:  ${props => props.change || 'skyblue'};
   // border-bottom : ${props => (props.value === 'homepage' ? '2px solid blue' : '')}
}
*/


cursor:${props=>props.disabled ? 'not-allowed':'pointer'};
&:focus{
    outline:2px solid blue;
}

animation: ${grow} 0.2s ease-in-out;
&:hover{
    animation: ${grow} 0.2s ease-in-out;
   transform: scale(1.5)
   ;

}

`

export default Homepage;