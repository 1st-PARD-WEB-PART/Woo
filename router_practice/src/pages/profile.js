import { useParams } from "react-router-dom";


const data={

    jap: {
        name:'japan',
        lanks:1,
        population:'o.1billion'


    },

 usa: {
    name:'usa',
    lanks: 2,
    population:'o.5billion'
},
   
mex: {
        name:'mexico',
        lanks: 3,
        population:'o.2billi'
    },
    
}

function Profile(){
    const {id} =useParams();
    const params=useParams();
    const profille=data[params.username]


    return (
        <div>
            <h1>wbc순위{id}</h1>
            {profille ?(
                <div>
                <p>{profille.name}</p>
                <p>{profille.lanks}</p>
                <p>{profille.population}</p>

                </div>

            ):(<div>
                <p>응 없어</p>
            </div>)}


        </div>
    )
}


export default Profile;