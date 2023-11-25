import style from './Cards.module.css';
import Card from '../card/Card'
const Cards = ({dogs}) => {
    return (
    <div className={style.cardsContainer}>
        {
            dogs?.map((dog)=>{
                return <Card dog={dog}/>
                // key= {dog.id}
                // id= {dog.id}
                // name= {dog.name}
                // weight= {dog.weight}
                // height= {dog.height}
                // life_span= {dog.life_span}
                // image= {dog.image}
                // />
            })
        }
    </div>
    )
}
export default Cards;