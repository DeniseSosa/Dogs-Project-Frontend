import style from './Cards.module.css';
import Card from '../card/Card'
const Cards = ({allDogs}) => {  // recibo de home por prop allDogs que tiene id, name...
    return (
    <div className={style.cardsContainer}>
        { 
         allDogs?.map(({id, name, weight, height, life_span, temperament, image})=>{ // lo mapeo para pasarselo a la card mediante props
            return <Card 
            key= {id}
            id= {id}
            name= {name}
            weight= {weight}
            height= {height}
            life_span= {life_span}
            temperament= {temperament}
            image= {image}
             />
            })
        }
    </div>
    )
}
export default Cards;