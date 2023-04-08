import styled from "styled-components";
import {Link} from 'react-router-dom';

const People= styled(Link)`



& :hover { color:  ${props => props.change || 'skyblue'};
border-bottom: ${props => (props.value === 'people' ? '4px solid blue' : '')}
}

`

export default People;