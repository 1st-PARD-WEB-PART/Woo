import { useParams } from 'react-router-dom';
// <Route path="/aboutmyself/:nname" element={<Aboutmyself/>} />
// /aboutmyself로 port이동시 <Aboutmyself>라는 component를 불를 수 있도록 설정
// /about으로 port가 이동하였을때 /aboutmyself로 port가 이동할 수 있는 경로를 설정하였다
// 또한 키 값으로

// const가 절대변수이므로 다른 파일에서 profile.js에서 쓰는
// 변수 적어도 된다. 변수가 compile에서 딱 검사하는데 compile은 한파일에서끼리만 하므로
const ddata={
    Handong:{
        howlong:5,
        remaining:3,
        religious:'기독교',
        favorite:'라면'



    }

}

function Aboutmyself(){

    const Aparams = useParams();

    const aboutmyself= ddata[Aparams.nname]

     return (
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <h1>소개해볼까요?</h1>
        <p style={{color:'red'}}>얼마나 오래다녔나요?: &nbsp;&nbsp;{aboutmyself.howlong}</p>
        {/*대답 색깔은 다르게*/}
        {aboutmyself.howlong >=5?(
            <p>고인물 입니다</p>):(
                <p>시냇물입니다.</p> )}
        <p>얼마나 더 다니셔야 하나요?:  &nbsp;&nbsp;{aboutmyself.remaining}</p>
        <p>종교는?  &nbsp;&nbsp;{aboutmyself.religious}</p>
        <p>뭘 좋아하나요?  &nbsp;&nbsp;{aboutmyself.favorite}</p>
     </div>
     );
};

export default Aboutmyself;