import style from './Card.module.css';

const Card = ({id, name, weight , height, life_span, temperament, image})=> {
    return (
        <div className={style.cardContainer}>
           <h2>{name}</h2>
           <h2>{weight}</h2>
         {/* <h2>{temperament}</h2> */}
        </div>
    )
};
export default Card;
