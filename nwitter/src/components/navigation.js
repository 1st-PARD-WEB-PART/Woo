import React from "react";
import { Link } from "react-router-dom";

const Navigation= ({UserObj})=> {

    return(
<nav>
    
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profile'>{UserObj.displayName} Profile</Link></li>
        {/*User이름으로 바뀜 */}
      
    </ul>
</nav>
    )
};
export default Navigation;