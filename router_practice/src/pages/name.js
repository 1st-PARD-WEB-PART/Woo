import { Link, Outlet } from "react-router-dom";


function Name(){
    return(
        <div>
           
    <ul>
        <li>
            <Link to={'/name/1/wbc'}>일본</Link>
            

        </li>
        <li>
        <Link to={'/name/2/wbcc'}>미국</Link>
           
        </li>
        <li>
        <Link to={'/name/3/wbcd'}>멕시코</Link>
        </li>
    </ul>
    <Outlet/>
    </div>
        );
};

export default Name;