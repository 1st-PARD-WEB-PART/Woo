import {useParams} from 'react-router-dom'
import Screen from './Screen';
import CenterText from './centerText';
const data={
    homepage:{
        name:'Homepage',
    },
    people:{
        name:'People',
    },
    game:{
        name:'Game',
    }

}

const Contents=()=>{
    
    const params=useParams();
    const contents=data[params.title]
    return(
        <div>
        
            <CenterText>{contents.name}</CenterText>


        
        </div>
    )
}

export default Contents;