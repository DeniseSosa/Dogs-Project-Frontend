const {Dog} = require('../models/Dog');
const {getDogs} = require('./getDogs');


const getDogByNameController = async(name)=>{
        const dogsByNameDb= await Dog.findAll({where: {name: {ilike: '%name%'}}}) // probar
    
        const get_Dogs= await getDogs(name);
        const dogsByNameApi= get_Dogs.filter(dog => dog.name.toLowerCase() == name.toLowerCase())
        
        return [...dogsByNameDb, ...dogsByNameApi]
}
module.exports={
    getDogByNameController
}