const axios= require('axios');
require ('dotenv').config();
const {Temperaments} = require('../db')

const {API_KEY}= process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`

const getTemperamentsController= async()=>{
    const {data}= await axios.get(URL)
    const temperamentsApi= data.map((dog)=> dog.temperament)
   // console.log(temperamentsApi);
   const tempsApi = temperamentsApi.toString().split(",")
   
    const tempsFiltered= tempsApi.filter((temp,index)=> {
       return tempsApi.indexOf(temp) === index
    })
         tempsFiltered.forEach(temperamento =>{
            if(temperamento){ 
                Temperaments.create({name:temperamento})}
         })
    return tempsFiltered;
    // for(let i =0; i< tempsApi.length; i++){
    //     Temperaments.findOrCreate({where: {name: tempsApi[i]}})
    // }
}
module.exports= {
    getTemperamentsController
}