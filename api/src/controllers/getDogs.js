const axios = require ('axios');
require ('dotenv').config();
const {API_KEY}= process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
const {Dog, Temperaments} = require('../db');




const getDogs= async ()=> {
        const {data} =  await axios(URL)
        const apiBreedsMap= data?.map((dog)=>{
         return {
             id:dog?.id,
             name:dog?.name,
             weight:dog?.weight?.metric,
             height:dog?.height?.metric,
             life_span:dog.life_span,
             temperament: dog?.temperament,
             image:dog?.image?.url,
             created: false
         }
        }) 

        
        const breeds_DB = await Dog.findAll({
            include:{
                 model: Temperaments, as:"temperament"}})
        const dogDB= breeds_DB.map(dog=> {
            return {
                id: dog.id,
                name:dog.name,
                weight: dog.weight,
                height:dog.height,
                life_span:dog.life_span,
                image: dog.image,
                created:true,
                temperament: dog.temperament.map(temp=> temp.name)
            }}
        )
        //console.log(breeds_DB); me devuelve en temperament un array temperament:[friendly]

        return [...dogDB, ...apiBreedsMap]

};

module.exports= {
    getDogs
}


// Debería obtener algo como esto
// [
//     {
//       "name": "Labrador",
//       "id":  ,
//       "tamaño": "Grande"
//     },
//     {
//       "raza": "Beagle",
//       "origen": "Inglaterra",
//       "tamaño": "Mediano"
//     },
//     {
//       "raza": "Chihuahua",
//       "origen": "México",
//       "tamaño": "Pequeño"
//     }
//   ]