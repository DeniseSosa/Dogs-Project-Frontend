const {Dog} = require('../db')
const {getDogs} = require('./getDogs');


const getDogByNameController = async(name)=>{
    const dogsByNameDb= await Dog.findAll({where: {name:name}}) // probar
    
    const get_Dogs= await getDogs(name);
     const dogsByNameApi= get_Dogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
        
        return[...dogsByNameDb,...dogsByNameApi]
}
module.exports={
    getDogByNameController
}