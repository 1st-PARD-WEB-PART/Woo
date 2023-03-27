import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div style={{display:"flex" }}>
            <h1><Link to={'/'}>홈</Link>
            </h1>
            
            <p style={{padding:'20px'}}>WBC순위를 조금 정리해봤습니다.</p>
            <ul style={{listStyle:'none' ,display:"flex",
       
        }}>
            <li style={{padding:'20px'}}><Link to={'/lankprofile'}>Wbc순위</Link></li>

            <li  style={{padding:'20px'}}><Link to={'/about'}>소개</Link></li>
            <li style={{padding:'20px'}}><Link to={'/about/2'}>눌러봐라</Link></li>
            
            <li style={{padding:'20px'}}> <Link to={'/name'}>Wbc 1~3위 나라 대표선수 </Link></li>
            </ul>
        </div>
    )
}

export default Home;