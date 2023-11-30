// Hooks
import { useSelector, useDispatch } from "react-redux";
import  {useEffect, useState } from "react";
// funciones de las actions
import {getAllDogs,getTemperaments,tempAllNames} from '../../redux/actions/actions'
// componentes
import Cards from "../cards/Cards";
import Pages from '../pages/Pages';
import SearchBar from "../searchBar/SearchBar";


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
},[])

// Paginacion
const lastIndex= currentPage* dataQt; // 1*8
const initIndex= lastIndex - dataQt;   // 8- 8
const nDogs= allDogs.slice(initIndex,lastIndex) // toda la data
const nPage= Math.ceil(allDogs.length / dataQt);


const handleAll = (event) => {
    dispatch(tempAllNames(event.target.value))
}

    return  (
    <div>
            <SearchBar setCurrentPage={setCurrentPage}/>
            <select onChange={handleAll}>
                <option value=""> Temperaments:</option>
                  { allTempCopy.map(temp => {
                      return  <option value={temp}  key={temp}>{temp}</option>
                  })
                  }
            </select>
            <select>
                <option value="apiTemperaments">Origin:Api</option>
                <option value="dbTemperaments">Origin:DB</option>
            </select>
            <select name="" id="">
                <option value="ascendent">from A to Z</option>
                <option value="desendent">from Z to A</option>
            </select>
            <select>
                <option value="lighter">Lighter</option>
                <option value="heavier">Heavier</option>
            </select>
            <Cards allDogs= {nDogs}/>
            <Pages 
            setCurrentPage={setCurrentPage} 
            currentPage= {currentPage} 
            nPage={nPage} />
    </div>
    )
}
export default Home;
