const {getTemperamentsController} = require('../controllers/getTemperamentsController')
const getTemperamentsHandler = async(_req,res)=>{
    try {
        const getTemperaments= await getTemperamentsController()
        res.status(200).json(getTemperaments)
    } catch (error) {
        res.status(404).send({error:error.message})
    }
}
module.exports= {
getTemperamentsHandler
}