const axios = require ('axios');
require ('dotenv').config();
const {Dog} = require('../db')

const {API_KEY}= process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`

const getDogs= async ()=> {

        const {data} =  await axios.get(URL)
        const apiBreedsMap= await data.map((dog)=>{
         return {
             id:dog.id,
             name:dog.name,
             weight:dog.weight.metric,
             height:dog.height.metric,
             temperament: dog.temperament,
             life_span:dog.life_span,
             image:dog.image,

         }
        }) 
        if(!apiBreedsMap)throw Error("not found")

        const breeds_DB= await Dog.findAll()
        return [...breeds_DB, ...apiBreedsMap]

};

module.exports= {
    getDogs
}

// const getDogs=async(req, res)=>{
//     try {
//         const {data}=await axios.get(URL);
//         /* const resp=await fetch(URL);
//         const data=await resp.json();  */
//         const allBreeds=await data.map(dog=>{
//             return {
//                 id:dog.id,
//                 name:dog.name,
//                 weight:dog.weight,
//                 height:dog.height,
//                 life_span:dog.life_span,
//                 image:dog.image,
//             }
//         })
        
//         return allBreeds;

//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// }

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