import { useParams } from "react-router-dom";


const data={

    wbc: {
        name:'japan',
        lanks:1,
        population:'o.1billion'


    }};

const data1={    wbc: {
    name:'usa',
    lanks: 2,
    population:'o.5billion'
}}
   
const data2={wbc: {
        name:'mexico',
        lanks: 3,
        population:'o.2billion'
    }
    
}

function Profile(){
    const params=useParams();
    const profille=data[params.username]
    const profille1=data1[params.username]
    const profille2=data2[params.username]

    return (
        <div>
            <h1>wbc순위</h1>
            {profille ?(
                <div>
                <p>{profille.name}</p>
                <p>{profille.lanks}</p>
                <p>{profille.population}</p>
                <p>{profille1.name}</p>
                <p>{profille1.lanks}</p>
                <p>{profille1.population}</p>
                <p>{profille2.name}</p>
                <p>{profille2.lanks}</p>
                <p>{profille2.population}</p>
                </div>

            ):(<div>
                <p>응 없어</p>
            </div>)}


        </div>
    )
}


export default Profile;