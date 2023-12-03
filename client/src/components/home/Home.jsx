// Hooks
import { useSelector, useDispatch } from "react-redux";
import  {useEffect, useState } from "react";
// funciones de las actions
import {getAllDogs,
     getTemperaments,
     tempAllNames,
     nameByOrigin,
     alphabeticOrder,
     orderByWeight} from '../../redux/actions/actions'
// componentes
import Cards from "../cards/Cards";
import Pages from '../pages/Pages';
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//Style
import style from "./Home.module.css"


const Home= ()=>{
    // Acceso al estado global
    const allDogs = useSelector(state => state.dogsCopy);
    const {allTempCopy} = useSelector(state=> state)
    const dispatch = useDispatch();
    // Estados locales para la paginacion 
    const [dataQt, setDataQt]= useState(8)
    const [currentPage, setCurrentPage]= useState(1)

    
useEffect (()=> {
    dispatch(getAllDogs())
    dispatch(getTemperaments())
},[dispatch])

// Paginacion
const lastIndex= currentPage* dataQt; // 1*8
const initIndex= lastIndex - dataQt;   // 8- 8
const nDogs= allDogs.slice(initIndex,lastIndex) // toda la data
const nPage= Math.ceil(allDogs.length / dataQt);


const handleAll = (event) => {
    dispatch(tempAllNames(event.target.value))
}
const handleDogOrigin = (event) => {
    dispatch(nameByOrigin(event.target.value))
}
const handleOrder = (event) =>{
    dispatch(alphabeticOrder(event.target.value))
}
const handleWeight= (event) => {
    dispatch(orderByWeight(event.target.value))
}

    return  (
    <div className={style.homeContainer}>
            <SearchBar setCurrentPage={setCurrentPage}/>

            <select onChange={handleAll}>
                <option value=""> Temperaments:</option>
                  { allTempCopy.map(temp => {
                      return  <option value={temp}  key={temp}>{temp}</option>
                  })
                  }
            </select>
            <select onChange={handleDogOrigin}>
                <option value="apiTemperaments">Origin:Api</option>
                <option value="dbTemperaments">Origin:DB</option>
            </select>
            <select onChange={handleOrder}>
                <option value="ascendent">from A to Z</option>
                <option value="desendent">from Z to A</option>
            </select>
            <select onChange={handleWeight}>
                <option value="lighter">Lighter</option>
                <option value="heavier">Heavier</option>
            </select>
            <Cards allDogs= {nDogs}/>
            <Pages 
            setCurrentPage={setCurrentPage} 
            currentPage= {currentPage} 
            nPage={nPage} />

            <Link to="/form">
            <button> Create your own Breed</button>
            </Link>
    </div>
    )
}
export default Home;
