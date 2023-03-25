import { useParams } from 'react-router-dom';

function Article() {
  const { id } = useParams();
  //useParams에 (map)의 title을 저장하기위한 중괄호
  {/*id가 useform이라했을 때 주는 정보의 재목 */}
  {/*중괄호의 제목*/}
  return (
    <div>
      <h2>게시글 {id}</h2> {/*text안에서 쓰기 위한 변수용 중괄호. const him=변수 에서 him의 값을
      텍스트에 도출 */}
      {/* */}
    </div>
  );
};

export default Article;