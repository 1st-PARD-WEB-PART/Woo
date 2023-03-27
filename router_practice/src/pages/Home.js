import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지</p>
            <li><Link to={'/profile/wbc'}>클릭</Link></li>
            <li><Link to={'/about'}>소개</Link></li>
            <li><Link to={'/profile/w'}>클릭</Link></li>
            <li> <Link to={'/name'}>이름 </Link></li>
        </div>
    )
}

export default Home;