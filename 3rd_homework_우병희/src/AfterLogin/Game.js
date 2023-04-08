import styled from "styled-components";
import {Link} from 'react-router-dom';

const Game= styled(Link)`


& :hover { color:  ${props => props.change || 'skyblue'};
border-width: ${props => (props.value === 'game' ? '100.7px' : '')};
border-bottom:${props => (props.value === 'game' ? '4px solid blue' : '')};


}
`

export default Game;