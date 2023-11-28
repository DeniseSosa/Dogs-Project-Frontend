import style from './Card.module.css';
import {Link} from 'react-router-dom';
const Card = ({id, name, weight , height, life_span, temperament, image})=> {
    return (
        <div className={style.cardContainer}>
            <Link to= {`/detail/${id}`}>
           <h2>{name}</h2>
            </Link>
           <h2>{weight}</h2>
         <h2>{temperament}</h2>
         <img  className={style.cardImage}src={image} alt= {name}/>
        </div>
    )
};
export default Card;
