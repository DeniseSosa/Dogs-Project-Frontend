const {getDogs}= require('../controllers/getDogs');

const dogsHandler= async (req,res)=> {
    try {
        const dog= await getDogs()
        return res.status(200).json(dog)
    
    } catch (error) {
        return res.status(500).send("Error al acceder a los datos")
        
    }
}
module.exports={
    dogsHandler
}