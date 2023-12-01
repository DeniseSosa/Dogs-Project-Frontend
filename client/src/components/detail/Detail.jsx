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
            <h3>Name:{dogDetail.name}</h3>
            <h4>Id:{dogDetail.id}</h4>
            <h5>Weight:{dogDetail.weight}</h5>
            <h5>Height:{dogDetail.height}</h5>
            <h5>Life span:{dogDetail.life_span}</h5>
            <h5>Temperament:{dogDetail.temperament}</h5>
            <img src={dogDetail.image} alt={dogDetail.name}/>

        </div>
    )
};
export default Detail;