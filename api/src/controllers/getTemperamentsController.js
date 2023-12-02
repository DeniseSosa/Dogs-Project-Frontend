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

   const tempsFiltered= tempsApi.filter((temp,index)=> {
       return tempsApi.indexOf(temp) === index
    })
    tempsFiltered.filter ((temp)=> temp!== "")
    //console.log(tempsFiltered)
   
    tempsFiltered.forEach(temperamento =>{
            if(temperamento){ 
                Temperaments.bulkCreate({name:temperamento})
            }
         })
    return tempsFiltered;
}
module.exports= {
    getTemperamentsController
}