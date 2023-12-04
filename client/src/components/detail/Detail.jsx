// Hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Dependencies
import axios from "axios";
//style
import style from "./Detail.module.css";

const Detail = () => {
  const { idRaza } = useParams();
  const [dogDetail, setDogDetail] = useState({});

  useEffect(() => {
    const dog = async () => {
      const { data } = await axios.get(`http://localhost:3001/dogs/${idRaza}`);
      setDogDetail(data);
    };
    dog();
    return () => {
      setDogDetail({});
    };
  }, [idRaza]);
  return (
    <div className={style.detailContainer}>
      <h2 className={style.detailName}>Name:{dogDetail.name}</h2>
      <p className={style.detailP}>Id:{dogDetail.id}</p>
      <p className={style.detailP}>Weight:{dogDetail.weight}</p>
      <p className={style.detailP}>Height:{dogDetail.height}</p>
      <p className={style.detailP}>Life span:{dogDetail.life_span}</p>
      <p className={style.detailP}>Temperament:{dogDetail.temperament}</p>
      <img src={dogDetail.image} alt={dogDetail.name} className={style.imageDetail} />
    </div>
  );
};
export default Detail;
