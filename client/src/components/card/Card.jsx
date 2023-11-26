import style from './Card.module.css';

const Card = ({ name, weight}) => {
    return (
        <div className={style.cardContainer}>
           <h2>{name}</h2>
           <h2>{weight}</h2>
         {/* <h2>{temperaments}</h2> */}
        </div>
    )
};
export default Card;
