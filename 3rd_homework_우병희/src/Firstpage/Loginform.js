import styled from "styled-components";
import {Link} from "react-router-dom"

const Form=styled.form`

position: absolute;
width: 482px;
height: 418px;
right:14.1%;
top: 18.2%;
/* Secondary Bg */

background: #FFFFFF;
box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`;

const Emailtext= styled.input`
height: 50px;
width: 385px;
left: 0px;
top: 0px;
border-radius: 10px;

box-sizing: border-box;

position: absolute;
left: 46px;
right: 51px;
top: 29px;
bottom: 339px;

background: #FFFFFF;
border: 0.5px solid #8A8D91;
border-radius: 10px;
`;

const Passtext= styled.input`
height: 49px;
width: 385px;
left: 0px;
top: 0px;
border-radius: 10px;

background: linear-gradient(0deg, #8A8D91, #8A8D91),
linear-gradient(0deg, #FFFFFF, #FFFFFF);


box-sizing: border-box;

position: absolute;
left: 46px;
right: 51px;
top:90px;
bottom: 279px;

background: #FFFFFF;
border: 0.5px solid #8A8D91;
border-radius: 10px;
`;


const Button= styled(Link)`
height: 50px;
width: 385px;
left: 0px;
top: 0px;
border-radius: 10px;

position: absolute;
left: 46px;
right: 51px;
top: 174px;
bottom: 194px;

background: #1877F2;
border-radius: 10px;
`;
const Logintext= styled.span`
position: absolute;
left: 0%;
right: 0%;
top: 26.32%;
bottom: 23.68%;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
text-align: center;

color: #FFFFFF;
`
const Ptext=styled.h3`
position: absolute;
width: 142px;
height: 16.77px;
left: 168px;
top: 249px;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.05em;

/* Secondary Text */

color: #1877F2;
`

const CreText= styled.span`
position: absolute;
left: 0%;
right: 0%;
top: 26.32%;
bottom: 23.68%;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
text-align: center;

color: #FFFFFF;

`

const CreButton= styled.button`
position: absolute;
left: 46px;
right: 51px;
top: 323px;
bottom: 45px;

background: #42B72A;
border-radius: 10px;
`;
const Line= styled.span`
position: absolute;
width: 385px;
height: 0px;

left: 49px;
top:299px;


border: 1px solid #8A8D91;

`


function FForm(){

    return (
<Form>           


<p>
<Emailtext type='text' placeholder="Email or phone number"></Emailtext>
</p>

<p>
<Passtext type='password' placeholder="Password"></Passtext>
</p>

<p>
<Button to='/content/homepage'> <Logintext>Login</Logintext></Button>
</p>
<Ptext>Forgot password? </Ptext> 
<CreButton><CreText>Create new account</CreText></CreButton>
<Line></Line>


</Form>
    )
}

export default FForm;

         