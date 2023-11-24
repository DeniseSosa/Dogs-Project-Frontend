//Este componente va a acceder al estado local de react name
// para poder buscar la raza por nombre 
import {Link} from "react-router-dom";
import {useState } from "react";
const Home= ()=>{
    const [name, setName] = useState("");


    return  (
    <div>
        <Link to= '/home'>
        <div>
        <input type="search"/> 
        </div>
        <div>
            <h3>Name:</h3>
            <h3>Temperament</h3>
            <h3>Weight:</h3>
            <img></img>
        </div>
        </Link>
    
    </div>)
}
export default Home;
