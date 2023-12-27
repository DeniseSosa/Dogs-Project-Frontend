const {postDogController} = require('../controllers/postDogController');

const postDogHandler= async(req,res)=>{
    try {
        const {name,image, height, weight, life_span,temperament}  = req.body;
        console.log({name,image, height, weight, life_span,temperament});
   const dog= await postDogController(name,image, height, weight, life_span,temperament)
      return res.status(200).json(dog);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
    
}
module.exports= {
    postDogHandler
}