const axios = require ('axios');
require ('dotenv').config();
const {Dog} = require('../db');
const Temperaments = require('../models/Temperaments');

const {API_KEY}= process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`

const getDogs= async ()=> {
        const {data} =  await axios(URL)
        const apiBreedsMap= data?.map((dog)=>{
         return {
             id:dog.id,
             name:dog.name,
             weight:dog.weight.metric,
             height:dog.height.metric,
             life_span:dog.life_span,
             temperament: dog.temperament,
             image:dog.image.url
         }
        }) 
        if(!apiBreedsMap)throw Error("not found")

        const breeds_DB= await Dog.findAll()

        return [...breeds_DB, ...apiBreedsMap]

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