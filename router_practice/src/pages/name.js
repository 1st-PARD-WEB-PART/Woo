import { Link, Outlet } from "react-router-dom";


function Name(){
    return(
        <div>
           
    <ul>
        <li>
            <Link to={'/Name/1/wbc'}>일본선수 이름</Link>
            

        </li>
        <li>
        <Link to={'/Name/2/wbcc'}>미국선수 이름</Link>
           
        </li>
        <li>
        <Link to={'/Name/3/wbcd'}>멕시코선수 이름</Link>
        </li>
    </ul>
    <Outlet/>
    </div>
        );
};

export default Name;