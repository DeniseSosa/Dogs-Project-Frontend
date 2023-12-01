import style from './Card.module.css';
import {Link} from 'react-router-dom';
const Card = ({id, name, weight , height, life_span, temperament, image})=> {
    return (
        <div className={style.cardContainer}>
            <Link to= {`/detail/${id}`}>
           <h3>Name:{name}</h3>
            </Link>
           <h4>Weight: {weight}</h4>
         <h4>Temperaments:{temperament}</h4>
         <img  className={style.cardImage}src={image} alt= {name}/>
        </div>
    )
};
export default Card;
