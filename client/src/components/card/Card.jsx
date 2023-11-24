const Card = () => {
    const {dogs}= useSelector(state=> state)
    return (
        <div>
            {
                dogs?.map((dog)=>{
                    return (<Card
                    key={dog.id}
                    id= {dog.id}
                    name ={dog.name}
                    weight={dog.weight}
                    height={dog.height}
                    temperament= {dog.temperament}
                    life_span={dog.life_span}
                    image={dog.image}
                    />)
                })
            }
        </div>
    )
};
export default Card;
