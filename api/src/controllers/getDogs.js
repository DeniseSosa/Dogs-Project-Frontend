//dependecies
const axios = require ('axios');
require ('dotenv').config();
// functions
const {API_KEY}= process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
const {Dog, Temperaments} = require('../db');

const getDogs= async ()=> {
        const {data} =  await axios(URL) // me traigo la data de la api
        const apiBreedsMap= data?.map((dog)=>{ // mapeo la data para obtener lo que quiero 
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

        const breeds_DB = await Dog.findAll({  // busco todos los dogs de la db los relaciono con el modelo temperaments a traves del alias temperament
            include:{
                 model: Temperaments, as:"temperament"}})
                 
                 const dogDB= breeds_DB.map(dog=> {
            const breedTempDB= dog.temperament.map(temp=> temp.name)// mapeo el temperamento asociado para poder traerlo directo a las cards
            return {
                id: dog.id,
                name:dog.name,
                weight: dog.weight,
                height:dog.height,
                life_span:dog.life_span,
                image: dog.image,
                created:true,
                temperament: breedTempDB.join(", ")
            }}
        )
        //console.log(breeds_DB); me devuelve en temperament un array temperament:[friendly]

        return [...dogDB, ...apiBreedsMap]  // concateno lo que traigo de la api y de la db

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