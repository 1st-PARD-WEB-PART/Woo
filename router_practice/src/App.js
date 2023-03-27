import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Name from "./pages/name";
import Profile from "./pages/profile";
import Names from "./pages/names";


function App(){
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/profile/:username' element={<Profile/>}></Route>

      <Route path='/name' element={<Name/>}>
      <Route path=':id/:userr' element={<Names/>}/>

      </Route>

    </Routes>
  )
}

export default App;