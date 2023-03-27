import { useParams } from "react-router-dom";


const data={
    wbc:{
        pitcher:['Shoheiohtani','Sasaki'],
        hitter:['Shoheiohtani','Nutba'],
        ppicture:["/img/ohtani.jpg","/img/sasaki.jpeg" ],
        hpicture:["/img/ohtani.jpg","/img/nut.jpeg" ]
    
        
    },
    wbcc:{
        pitcher:['Freeland','Kershaw'],
        hitter:['Trout',' Goldschmidt'],
        ppicture:["/img/Free.jpeg","/img/ker.jpeg" ],
        hpicture:["/img/Trout.jpeg","/img/Gold.jpeg" ]
       
    },
    wbcd:{
        pitcher:['Sanchez','James'],
        hitter:['Alex','Rodriguez'],
        ppicture:["/img/Free.jpeg","/img/ker.jpeg" ],
        hpicture:["/img/Trout.jpeg","/img/Gold.jpeg" ]
       
     
    }
   }
function Names(){
   


    const {id} =useParams();
    const params= useParams();

    const profile1=data[params.userr]

    return (
<div>
    <h2>나라별{id} </h2>
   
        {profile1 ?( <div> pitcher <table>
            
            <thead>
                <th>{profile1.pitcher[0]}</th>
                <th>{profile1.pitcher[1]}</th>
            </thead>
            <tbody>
                <td><img src={profile1.ppicture[0]} style={{width:300, height:300}}/></td>
                <td><img src={profile1.ppicture[1]} style={{width:300, height:300}}/></td>


            </tbody>


        </table>
        hitter
        <table>
            <thead>
                <th>{profile1.hitter[0]}</th>
                <th>{profile1.hitter[1]}</th>
            </thead>
            <tbody>
                <td><img src={profile1.hpicture[0]} style={{width:300, height:300}}/></td>
                <td><img src={profile1.hpicture[1]} style={{width:300, height:300}}/></td>


            </tbody>


        </table>
        
        </div>):(<p></p>)}

    


</div>

    )

}

export default Names;