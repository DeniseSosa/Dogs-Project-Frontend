const {getDogs} = require ('../controllers/getDogs')

const {Dog} = require('../db');
const {Temperaments} = require('../db');

const getDogById = async (idRaza) => {
    if(isNaN(idRaza)){
        const dogDbId= await Dog.findByPk(idRaza,{
                include:{
                     model: Temperaments, as:"temperament"}
                });
        return dogDbId;
    } else {
       const get_Dogs=  await getDogs()
       //console.log(get_Dogs);
       const dogByIdApi = get_Dogs.find((dog)=>  dog.id === +idRaza)
       return dogByIdApi;
    }
}
module.exports= {
    getDogById
}