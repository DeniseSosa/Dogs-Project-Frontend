import style from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = ({ id, name, weight, height, life_span, temperament, image }) => { // Recibo props de cards (que es el contenedor de las card)
  return (
    <div className={style.cardContainer}>
      <div className={style.cardNameH5}>
        <Link to={`/detail/${id}`}>
          <h5>Name:{name}</h5>
        </Link>
      </div>

      <div className={style.attributesP}>
        <p>Weight: {weight}</p>
        <p>Temperaments:{temperament}</p>
      </div>

      <div>
        <img className={style.cardImage} src={image} alt={name} />
      </div>
    </div>
  );
};
export default Card;
