// functions
const {getDogs} = require ('../controllers/getDogs')
// models
const {Dog} = require('../db');
const {Temperaments} = require('../db');

const getDogById = async (idRaza) => {
    // if(isNaN(idRaza)){ //si no es un numero es porque viene de la db entonces lo relaciono con el modelo temperaments
    //     const dogDbId= await Dog.findByPk(idRaza,{
    //             include:{
    //                  model: Temperaments, as:"temperament"}
    //             });
    //     return dogDbId
    // } else {
       const get_Dogs=  await getDogs(idRaza)  // utilizo la funcion get dogs para find (encontrar el id que coincida con el que me enviador mediante la searchbar)
       //console.log(get_Dogs);
       const dogByIdApi = get_Dogs.find((dog)=>  dog.id == idRaza)
       
       return dogByIdApi;
    }
// }
module.exports= {
    getDogById
}