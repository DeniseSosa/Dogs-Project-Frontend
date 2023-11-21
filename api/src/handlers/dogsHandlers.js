const {getDogs}= require('../controllers/getDogs')
const dogsHandler= async (req,res)=> {
    try {
        const dog=await getDogs()
        console.log(dog)
        res.status(200).json(dog)
    
    } catch (error) {
        res.status(500).send({error:error.message})
        
    }
}
module.exports={
    dogsHandler
}