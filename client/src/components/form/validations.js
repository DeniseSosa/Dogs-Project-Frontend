const validation = (create) =>{
    let errors = {};
if (!create.name){
    errors.name = "Name must must be less 10 characters and cannot be null"
}
if(!(/^[0-9]+$/).test(create.heightMin)|| create.heightMin > create.heightMax){
    errors.heightMin = "Min height souldn't be less than 10cm and must be a number"
}
if(!(/^[0-9]+$/).test(create.heightMax) || create.heightMax < create.heightMin){
    errors.heightMax= "Min height souldn't be more than 100cm and must be a number"
}
if(!(/^[0-9]+$/).test(create.weightMin) || create.weightMin > create.weightMax){
    errors.weightMin= "Min weight must be at least 1 kg and cannot be zero."
}
if(!(/^[0-9]+$/).test(create.weightMax) || create.weightMax < create.weightMin){
    errors.weightMax= "Max wight cannot exceed 90 kg either be null"
}
if(!create.life_span){
    errors.life_span="An option must be chosen"
}
if(!create.temperament){
    errors.temperament= "An option must be chosen"
}
return errors
}
export default validation