import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import NotFound from './pages/NotFound';


import Layout from './Layout';
{/*pages 폴더 안에 articles.js*/}
function App() {
  return (
    

    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      </Route>
      {/* Route의 header안에 layout되는 점을 home에 있는 것만 하게 한다*/}
      {/*안에 /about, /profile은 클릭 시에 header안에서가 아닌 새로 나오게 한다 */}
      {/*index = path='/' outlet안에서 첫번째 화면으로 한다
      index대신에 path='/'를 쓰면 충돌 
      /가 무조건 우선이다. 
      path='/'와 index 바꾸면 path='/'만 나옴
      로그인 됫을때 안됬을 떄 
      */}
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
      
      {/*
   <Route path="/articles" element={<Articles />}>
      <Route path=":id" element={<Article />} />
    </Route>
    */}

    <Route path="*" element={<NotFound />} />
    {/* 와일드 카드 *가 의미하는 것은 이곳에 어떤 텍스트가 들어가도 상관 없다는 뜻이며
      와일드 카드는 다른 것도 의미하는데 

    path="/workspace/channel" 와 같이 child route인 경우에 
    channel이라는 component로 가기 위해
    path="/workspace/*"로 workspace라는 컴포넌트로 보내고 
     path="channel" 인지 나누어 보냄.
     https://basemenks.tistory.com/248
    */}
  </Routes>
  
  );
};

export default App;