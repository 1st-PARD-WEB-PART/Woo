import styled from "styled-components";
import {Link} from 'react-router-dom';

const People= styled(Link)`
position: absolute;
left: 726.79px;

top: 12.79px;


& :hover { color:  ${props => props.change || 'blue'};
border-bottom: ${props => (props.value === 'people' ? '4px solid #222' : '')}
}

`

export default People;