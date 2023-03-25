import React from 'react';
import { Link } from 'react-router-dom';
import './im.css';

function Home(){
  return (
    <div>

      <h1>홈</h1>
      <>
      <Link to="/about">소개</Link>
      {/*route는 요청주소에 따라 다른 컴포넌트를 보여주는것
      ㅣLink는 다른 주소로 이동시키는 형태 주소만 바뀔뿐 페이지를 새로 불러오지 않음
      리액트는 <a></a> 사용 안함, 상태 값이 초기화 되고 새로 렌더링됨
      */}
      <ul>
        
        <li>
          <Link to="/profiles/WBH">우병희의 프로필</Link>
          {/* profile.js에서 data[params.username]의 
          key값으로 WBH가 작동한다.*/}
        </li>
        {/*
        <li>
          <Link to="/profiles/Pjk">웹파트의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
       </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
  </li>
  */}
      </ul>
      </>
    </div>
  );
};

export default Home;
