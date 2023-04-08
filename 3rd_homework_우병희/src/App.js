import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Firstpage/home';
import Content from './AfterLogin/Content';
import Contents from './AfterLogin/Contetns';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/content' element={<Content/>}>
        <Route path=':id/:title' element={<Contents/>} />
        </Route>
        
      </Routes>
      

    </div>
  );
}

export default App;
