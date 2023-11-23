const {Dog} = require('../db');

const postDogController = async (name,image, height, weight, life_span)=>{
    // console.log(name)
    const [dogCreated, created] = await Dog.findOrCreate({where: {name, weight, height, image, life_span}});
    // console.log(dogCreated);
    // console.log(created);
    // await dogCreated.setTemperaments(dog_temperaments); 
    if(created)
    return dogCreated;
}
module.exports= {
    postDogController
}