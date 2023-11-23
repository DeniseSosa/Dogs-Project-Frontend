const {getDogById} = require('../controllers/getDogById');

const getDogByIdHandler = async (req, res) => {
   try {
    const {idRaza} = req.params;
       const dogById = await getDogById(idRaza);
       if(!idRaza) throw Error ("ID not found")
       return res.status(200).json(dogById)
   } catch (error) {
    return res.status(404).send(error.message)
   }   
}
module.exports= {
    getDogByIdHandler
}