const {postDogController} = require('../controllers/postDogController');

const postDogHandler= async(req,res)=>{
    const {name,image, height, weight, life_span,temperament}  = req.body;
    console.log({name,image, height, weight, life_span,temperament});
    try {
    const postDog= await postDogController(name,image, height, weight, life_span,temperament)
    //console.log(postDog);
      return res.status(200).send("Created successfully");
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
    
}
module.exports= {
    postDogHandler
}