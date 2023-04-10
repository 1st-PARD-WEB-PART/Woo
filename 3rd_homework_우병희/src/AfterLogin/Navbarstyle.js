import styled from 'styled-components';

const Navbarleft=  styled.form`
    display:flex;
    height:40px;
    width:10%;
    flex-direction: row;
    align-items: center;
    
    gap:10px;
   
    `

    const Navbarmiddle=  styled.div`

    position: absolute;
    display:flex;
    width:50%;
    height:40px;
    flex-direction: row;
    align-items: center;
    gap:90px;
    
    left: 38.81%;


    `

    const Navbarright=  styled.div`

    position: absolute;
    display:flex;
    width:40%;
    height:40px;
    flex-direction: row;
    align-items: center;
    gap:15px;
    
    left: 92%;


    `
const Navbarr=styled.div`

width: 100%;
height: 40%;
display:flex;
flex-direction:column;
 


background: #FFFFFF;
`

export  {Navbarr,Navbarleft,Navbarmiddle,Navbarright};