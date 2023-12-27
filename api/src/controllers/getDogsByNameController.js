const {getDogs} = require('./getDogs'); // en get dogs esta tanto lo de la db como lo de la api desde esta funcion solo filtro por name para buscar en la barra search


const getDogByNameController = async(name)=>{
     const get_Dogs= await getDogs(name);
     const dogsByNameApi= get_Dogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase())) // filtro todos los que incluyan el name 
        
        return dogsByNameApi
}
module.exports={
    getDogByNameController
}