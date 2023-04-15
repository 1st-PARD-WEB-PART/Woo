import styled,  { keyframes } from "styled-components";
import {Link} from 'react-router-dom';

const grow = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(5);
  }
`;

const People= styled(Link)`

   cursor:${props=>props.disabled ? 'not-allowed':'pointer'};
&:focus{
    outline:2px solid blue;
}

animation: ${grow} 0.2s ease-in-out;

&:hover {
 
  // hover 상태에서 grow 애니메이션을 적용하고, transform 속성을 추가합니다.
  animation: ${grow} 0.2s ease-in-out;
  transform: scale(1.5);
}




`

export default People;