const validation = (create) =>{
    let errors = {};
if (!create.name){
    errors.name = "Name must must be less 10 characters and cannot be null"
}
if(!(/^[0-9]+$/).test(create.heightMin)|| create.heightMin > create.heightMax){
    errors.heightMin = "Min height must be a number and cannot exceed maximum height"
}
if(!(/^[0-9]+$/).test(create.heightMax) || create.heightMax < create.heightMin){
    errors.heightMax= "Max height must be a number and cannot be less than min height"
}
if(!(/^[0-9]+$/).test(create.weightMin) || create.weightMin > create.weightMax){
    errors.weightMin= "Min weight must be a number and cannot exceed maximum weight"
}
if(!(/^[0-9]+$/).test(create.weightMax) || create.weightMax < create.weightMin){
    errors.weightMax= "Max weight must be a number and cannot be less than min weight"
}
if(!create.life_span){
    errors.life_span="An option must be chosen"
}
if(!create.temperament){
    errors.temperament= "An option must be chosen"
}
if(!(/.(gif|jpeg|jpg|png)$/).test(create.image)){
    errors.image= "Invalid"
}
return errors
}
export default validation