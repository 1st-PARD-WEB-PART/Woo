import styled from "styled-components";
import {Link} from 'react-router-dom'



const Homepage= styled(Link)`
widht:100.7px;


& :hover {
   
    color:  ${props => props.change || 'skyblue'};
    border-bottom: ${props => (props.value === 'homepage' ? '4px solid blue' : '')}
}


;
`

export default Homepage;