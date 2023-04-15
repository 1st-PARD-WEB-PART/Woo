import styled from "styled-components";
import {GoDiffAdded} from 'react-icons/go';


const Lang= styled.div`
position: absolute;
display:flex;
width: 80%;
height: 26px;
left: 7.2%;
top: 43px;
gap :20px;
flex-wrap : wrap;
`

/* identical to box height */


/* BW Shade 1 */


const LanguageUl = styled.a`
 display: flex; 
 flex-direction: row;
 align-items:center;
 justify-content: baseline;
 font-family: 'Roboto';
font-style: normal;
font-weight: 400;
//폰트 굵기
font-size: 18px;
line-height: 19px;

 

 
  /* BW Shade 1 */
   
  color: #8A8D91;

`;

const Vec= styled.span`
position: absolute;
width: 80%;
height: 0px;
left: 7.2%;
top: 84px;

border: 0.5px solid #8A8D91;
transform: rotate(-0.2deg);
`


const Links= styled.div`
position: absolute;
width: 80%;
height: 100px;
left: 7.2%;
top: 111px;
display:flex;
flex-flow:wrap;
gap :15px;

`
const Meta= styled.span`
position: absolute;
width: 110px;
height: 19px;
left: 7.2%;
top: 230px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
/* identical to box height */


/* BW Shade 1 */

color: #8A8D91;
`
const FFooter= styled.footer`
position: absolute;
width: 100%;
height:30%;
left: 0px;
top: 803px;
display:flex;
flex-direction:column;




/* Secondary Bg */

background: #FFFFFF;
`

function Footer(){

    const languages = [
        'English(US)','한국어', '日本語', 'Deutsch',
        'Português(Brasil)',' Français(France)',
        'Español', 'Italiano', 'العربية','हिन्दी',<GoDiffAdded></GoDiffAdded>
    ]


 
    const Linkks = [
        "Privacy","Careers","Developers","Create Page",
    "Create Ad","About","Groups","Help","Terms",
    "Ad choices","Cookies",
    "Voting Information Center","Services","Fundraisers","Local","Bulletin"
    ,"Instagram","Portal","Oculus","Facebook Play",
   'Marketplace','Games','Places','Places','Watch'
    ,'Facebook Lite','Messenger','Messenger','Log In'
    ,'Log In','Sign Up'
    ,'Sign Up']

    return (
        <FFooter>
               
<Lang>

    {languages.map((Language)=>(

<LanguageUl>{Language}</LanguageUl>
))}

</Lang>

<Vec></Vec>


<Links>

{Linkks.map((Link)=>(

<LanguageUl>{Link}</LanguageUl>

))}
</Links>


<Meta>Meta © 2022</Meta>

</FFooter>

    )
}



export default Footer;
