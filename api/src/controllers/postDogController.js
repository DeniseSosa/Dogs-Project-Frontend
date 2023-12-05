
const {Dog, Temperaments} = require('../db');


const postDogController = async (name,image, height, weight, life_span, temperament)=>{
    //console.log(temperament)
    const  [dogCreated,  created] = await Dog.findOrCreate({where:{name , weight, height, image, life_span}, include:[{model: Temperaments, as: 'temperament'}]});
     if(created){
      //  console.log(dogCreated);
    const [tempAsociate, createdT] = await Temperaments.findOrCreate({where:{name:temperament}})
   console.log(tempAsociate)
    if(createdT) {
     let dog= await dogCreated.setTemperament(tempAsociate)
     return dog
    }
  
     
}
}
module.exports= {
    postDogController
}