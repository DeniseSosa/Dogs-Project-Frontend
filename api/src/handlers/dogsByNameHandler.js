
const {getDogByNameController}= require('../controllers/getDogsByNameController')

const dogsByNameHandler = async(req,res)=>{
    try {
        const {name}= req.query;
        const getDogByName=  await getDogByNameController(name); 
        if(!getDogByName) throw Error('Breed not found');
        return res.status(200).json(getDogByName)
    } catch (error) {
        return res.status(404).send({error:error.message})
        
    }

}
module.exports= {
    dogsByNameHandler
}