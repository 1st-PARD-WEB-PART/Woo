// "react-router-dom" 라이브러리에서 "useParams" 훅을 import 합니다.
import { useParams } from 'react-router-dom';


// 사용자 정보를 담은 객체입니다.
const data = {
  WBH: {
    name: '우병희',
    description: '18학번 고인물',
    age:25,
    military: '예비군 3년차',
    major:'전산으로 교환될 예정',
    picture:"/img/ME.jpg" ,



  },

  /*
  Pjk: {
    name: '웹파트',
    description: '파드의 웹 개발 파트',
  },
  */
};


// 프로필 정보를 표시하는 컴포넌트입니다.
function Profile() {


  const picture={
    width:300 ,
    height:300
  }
  // "useParams" 훅을 사용하여 URL에서 전달된 username 파라미터를 가져옵니다.
  // 
  const params = useParams();
  // <Route path="/profiles/:username" element={<Profile />} />
  // 에서 :username이 parameter를 의미하고 element는 Profile component를 의미
  // 

  // username 파라미터에 해당하는 사용자 정보를 "data" 객체에서 가져옵니다.
  //const profile = data[useParams().username];
  const profile = data[params.username];
  // App.js에서 
  //<Route path="/profiles/:username" element={<Profile />} />
  // :username으로 되어있어서 id같은 거다.
  // profile은 위에서 key값으로 설정된 값에 대한 
  // 객체의 정보를 담은 것 여기서는 home에서 WBH가 key값으로 작용하니
  /*
  {
    name: '우병희',
    description: '18학번 고인물',
    age:25,
    military: '예비군 3년차',
    major:'전산으로 교환될 예정',
    picture:"/img/ME.jpg" ,
  }
  이것을 담고 있다.
  */

  // 사용자 정보가 존재하면 해당 정보를 화면에 표시하고, 그렇지 않으면 존재하지 않는 프로필임을 알리는 메시지를 표시합니다.
  return (
    <div>
      <h1>사용자 프로필</h1>
      {/*profile안에 kyj, pjk라는 username의 key값을 전달해서 있냐 없냐*/}
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <p>{profile.age}</p>
          <p>{profile.military}</p>
          <p>{profile.major}</p>
          <img style={picture} src={profile.picture} />
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

// Profile 컴포넌트를 모듈의 기본 내보내기(default export)로 내보냅니다.
export default Profile;