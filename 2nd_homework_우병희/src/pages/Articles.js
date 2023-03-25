import { Link, Outlet } from 'react-router-dom';

function Articles() {
  return (
    <div>
    <Outlet /> {/* path를 쓰겠다 중첩 라우터로
    <Route path=":id" element={<Article />} />
          <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>에서 <Route></Route> 안에 애들 출력 두개 있으면 두개 다 출력

    
    */}
    <ul>
      <li>
        <Link to="/articles/1">게시글 1</Link>
      </li>
      <li>
        <Link to="/articles/2">게시글 2</Link>
      </li>
      <li>
        <Link to="/articles/3">게시글 3</Link>
      </li>
    </ul>
  </div>
  );
};

export default Articles;