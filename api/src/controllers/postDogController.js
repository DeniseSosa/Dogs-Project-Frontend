const {Dog} = require('../db');

const postDogController = async (name,image, height, weight, life_span)=>{
    // console.log(name)
    const [dogCreated, created] = await Dog.findOrCreate({where: {name, weight, height, image, life_span}});
    // console.log(dogCreated);
    // console.log(created);
    if(created)
    return dogCreated;
}
module.exports= {
    postDogController
}