import { useParams } from "react-router-dom";

function Names(){
   const datajapan={
    wbc:{
        pitcher:['shoheiohtani',', ','nakamura'],
        pittcher:['shoheiohtani',', ','nakamura'],
        pittrcher:['shoheiohtani',', ','nakamura'],
    }
   }
   const dataUsa={
    wbcc:{
        pitcher:['freedmon',', ','hoho'],
        pittcher:['freedmon',', ','hoho'],
        pittrcher:['freedmon',', ','hoho'],
    }
   }
   const dataMexico={
    wbcd:{
        pitcher:['sasf',', ','nakamuradsadas'],
        pittcher:['sasf',', ','nakamuradsadas'],
        pittrcher:['sasf',', ','nakamuradsadas'],
    }
   }

    const {id} =useParams();
    const params= useParams();

    const profile1=datajapan[params.userr]
    const profile2=dataUsa[params.userr]
    const profile3=dataMexico[params.userr]
    return (
<div>
    <h2>나라별 {id}</h2>
    {profile1?(<div>
        <p>{profile1.pitcher}</p>
        <p>{profile1.pittcher}</p>
        <p>{profile1.pittrcher}</p>
    </div>):(<p></p>)}
    {profile2?(<div>
        <p>{profile2.pitcher}</p>
        <p>{profile2.pittcher}</p>
        <p>{profile2.pittrcher}</p>
    </div>):(<p></p>)}

    {profile3?(<div>
        <p>{profile3.pitcher}</p>
        <p>{profile3.pittcher}</p>
        <p>{profile3.pittrcher}</p>
    </div>):(<p></p>)}


</div>

    )

}

export default Names;