const axios= require('axios');
require ('dotenv').config();
const {Temperaments} = require('../db')

const {API_KEY}= process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`

const getTemperamentsController= async()=>{
    const {data}= await axios.get(URL)
    const temperamentsApi= data.map((dog)=> dog.temperament)
   // console.log(temperamentsApi);
   let tempsApi = temperamentsApi.toString().split(",")
   tempsApi=tempsApi.filter ((temp)=> temp!== "")

   const tempsFiltered= tempsApi.filter((temp,index)=> { //retorna el primer indice del arreglo en donde se encuentre un elemento dado.
       return tempsApi.indexOf(temp) === index
    })
//     tempsFiltered.forEach(temperament => {
//    if(temperament) Temperaments.bulkCreate({name:temperament})})
//     return tempsFiltered  ESTO DEVUELVE UN ARREGLO DE TEMPERAMENTOS
    const temperamentsObject= tempsFiltered.map((temperament)=> { // aqui convierto los temperamentos a un objeto
        return {
            name:temperament
        }
    })
    //console.log(temperamentsObject);
    temperamentsObject.forEach(temperament => {
        if(temperament) Temperaments.bulkCreate({name:temperament}) // aqui los guardo en la db como [{name:temperament}{name:temperamen}{name:temperamen}]
        
    });
    return temperamentsObject
    
}
module.exports= {
    getTemperamentsController
}