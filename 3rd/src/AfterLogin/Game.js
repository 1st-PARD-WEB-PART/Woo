import styled from "styled-components";
import {Link} from 'react-router-dom';

const Game= styled(Link)`
position: absolute;
left: 837px;

top: 17px;

& :hover { color:  ${props => props.change || 'blue'};
border-bottom: ${props => (props.value === 'game' ? '4px solid #222' : '')}



}
`

export default Game;