
import {Link, Outlet} from 'react-router-dom'
import Navbar from './Navbar';
import { useState,useEffect } from 'react';

import Screen from './Screen';
import { Div } from './Call';

import {ScrollDetector,StyleDiv, StyledText} from './Scroll';
import styled from 'styled-components';

const ContentWrapper=styled.div`
overflow-x: hidden;
`

const Content=()=>{

   

    /*
    const changeUnderline=(e)=>{
        setcurrentTap(e.target.value);

        
    }
    */

    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const scrollThreshold = 40;
        if (currentScrollY > scrollThreshold) {
          setTextVisible(true);
        } else {
          setTextVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return() => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  
    
    return(
          <ContentWrapper>  
            <Navbar/>
     

    <Screen >

    {/*
    scroll하면 Outlet구현
    <StyledText visible={textVisible}><Outlet/></StyledText> */}
    <Outlet/>
    </Screen>
    </ContentWrapper> 
  
    )
}

export default Content;