
const {Dog, Temperaments} = require('../db');


const postDogController = async (name,image, height, weight, life_span, temperament)=>{
    // console.log(name)
    const  [dogCreated,  created] = await Dog.findOrCreate({where:{name , weight, height, image, life_span}});
     if(created){
    const tempAsociate = await Temperaments.findOrCreate({where:{name:temperament}})
    return dogCreated.addTemperaments(tempAsociate)}
    return dogCreated
}
module.exports= {
    postDogController
}