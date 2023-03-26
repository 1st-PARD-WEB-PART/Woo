import React from 'react';
import { Link } from 'react-router-dom';

function About() {

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <h1>소개</h1>
      <p>안녕하세요 한동대학교 18학번 우병희 입니다.</p>
      <ul>
      <li>
        <Link to='/aboutmyself/Handong' >나의 한동에서의 생활</Link>
        {/*Handong을 parameter의 key값으로 지정한다.*/}
      </li>
      </ul>
    </div>
  );
};

export default About;