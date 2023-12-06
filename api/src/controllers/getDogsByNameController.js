const {Dog} = require('../db')
const {getDogs} = require('./getDogs');


const getDogByNameController = async(name)=>{
    const dogsByNameDb= await Dog.findAll({where: {name:name}}) // busco en la db todos los que coincidan con el name enviado por query
    
    const get_Dogs= await getDogs(name);
     const dogsByNameApi= get_Dogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase())) // filtro todos los que incluyan el name 
        
        return[...dogsByNameDb,...dogsByNameApi]
}
module.exports={
    getDogByNameController
}