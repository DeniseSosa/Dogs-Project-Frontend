import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";


const Detail = () => {

    const {idRaza} = useParams();
    const [dogDetail, setDogDetail] = useState({});

    useEffect(()=> {
        const dog= async ()=>{
            const {data}= await axios.get (`http://localhost:3001/dogs/${idRaza}`)
            setDogDetail(data)
        }
        dog()
         return (()=>{
            setDogDetail({})
         })
    }, [idRaza])
    return (
        <div>
            <h3>{dogDetail.name}</h3>
            <h4>{dogDetail.id}</h4>
            <h5>{dogDetail.weight}</h5>
            <h5>{dogDetail.height}</h5>
            <h5>{dogDetail.life_span}</h5>
            <h5>{dogDetail.temperament}</h5>
            <img src={dogDetail.image} alt={dogDetail.name}/>

        </div>
    )
};
export default Detail;