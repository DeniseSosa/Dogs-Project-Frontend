//Este componente va a acceder al estado local de react name
// para poder buscar la raza por nombre 
import { useSelector, useDispatch } from "react-redux";
import {useEffect } from "react";
import {getAllDogs} from '../../redux/actions/actions'
import Cards from "../cards/Cards";
const Home= ()=>{
    const {dogs} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect =(()=> {
        dispatch(getAllDogs())
    },[dispatch])

    return  (
    <div>
        <h3>Este es el home </h3>
        <form>
        <label htmlFor=""></label>
        <input type="search"/> 
        <button>Search</button>
        </form>
        <div>
            <Cards dogs= {dogs}/>
        </div>
    </div>
    )
}
export default Home;
