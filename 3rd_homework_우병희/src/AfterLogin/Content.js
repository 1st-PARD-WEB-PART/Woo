
import {Link, Outlet} from 'react-router-dom'
import Navbar from './Navbar';

import Screen from './Screen';


const Content=()=>{

   
    /*
    const changeUnderline=(e)=>{
        setcurrentTap(e.target.value);

        
    }
    */



    return(
        <div>
           
    <Navbar></Navbar>
     

    <Screen>
      
       <Outlet/>
     
       
       </Screen>
       
       </div>
    )
}

export default Content;