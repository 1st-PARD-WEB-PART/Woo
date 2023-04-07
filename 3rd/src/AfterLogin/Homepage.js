import styled from "styled-components";
import {Link} from 'react-router-dom'

const box={
    boxsizing:'border box',
    background: '#2374E1',
    border: '1px solid #000000',
    boxshadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    top:'9px',
width: '100.7px',
height: '2.5px'
}
const Homepage= styled(Link)`

position: absolute;
left: 615px;
top:13px;


& :hover {
   
    color:  ${props => props.change || 'blue'};
   border-bottom: ${props => (props.value === 'homepage' ? box : '')}}


;
`

export default Homepage;