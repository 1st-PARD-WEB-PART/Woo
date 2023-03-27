import { Link, Outlet } from "react-router-dom";


function Lankprofile(){
    return(
        <div>
           
    <ul>
        <li>
            <Link to={'/lankprofile/1/jap'}>일본</Link>
            {/* id를 지정해놔야 경로대로 움직임 */}
            

        </li>
        <li>
        <Link to={'/lankprofile/2/usa'}>미국</Link>
           
        </li>
        <li>
        <Link to={'/lankprofile/3/mex'}>멕시코</Link>
        </li>
    </ul>
    <Outlet/>
    </div>
        );
};

export default Lankprofile;