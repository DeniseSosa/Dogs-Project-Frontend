// Hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
//Dependencies
import axios from "axios";
//style
import style from "./Detail.module.css";
import CardLoading from "../card/CardLoading";

const Detail = () => {
  const { idRaza } = useParams();
  const [dogDetail, setDogDetail] = useState({});
  const [loading, setloading]= useState(false);

  useEffect(() => {
    setloading(true)
    const dog = async () => {
      const { data } = await axios.get(`http://localhost:3001/dogs/${idRaza}`);
      setDogDetail(data);
      setloading(false)
    };
    dog();
    return () => {
      setDogDetail({});
    };
  }, [idRaza]);
  console.log(dogDetail);

  return (
    <div className={style.detailContainer}>
      {
        loading===true
        ? <CardLoading/> 
        : ( <>
        <h2 className={style.detailName}>Name:{dogDetail?.name}</h2>
      <p className={style.detailP}>Id:{dogDetail?.id}</p>
      <p className={style.detailP}>Weight:{dogDetail?.weight}</p>
      <p className={style.detailP}>Height:{dogDetail.height}</p>
      <p className={style.detailP}>Life span:{dogDetail.life_span}</p>
      <p className={style.detailP}>Temperament:{dogDetail?.temperament }</p>
      <img src={dogDetail.image} alt={dogDetail.name} className={style.imageDetail} />
        </>)
    
      }
      <Link to="/home">
      <button>Home</button>
      </Link>
    </div>
  );
};
export default Detail;
