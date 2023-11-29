// Hooks
import { useSelector, useDispatch } from "react-redux";
import  {useEffect, useState } from "react";
// funciones y componentes
import {getAllDogs} from '../../redux/actions/actions'
import Cards from "../cards/Cards";
import Pages from '../pages/Pages';
import SearchBar from "../searchBar/SearchBar";


const Home= ()=>{
    // Acceso al estado global
    const allDogs = useSelector(state => state.dogsCopy);
    const dispatch = useDispatch();
    // Estados locales para la paginacion 
    const [dataQt, setDataQt]= useState(8)
    const [currentPage, setCurrentPage]= useState(1)
    
useEffect (()=> {
    dispatch(getAllDogs())
},[])

// Paginacion
const lastIndex= currentPage* dataQt; // 1*8
const initIndex= lastIndex - dataQt;   // 8- 8
const nDogs= allDogs.slice(initIndex,lastIndex) // toda la data
const nPage= Math.ceil(allDogs.length / dataQt);


    return  (
    <div>
            <SearchBar setCurrentPage={setCurrentPage}/>
            <Cards allDogs= {nDogs}/>
            <Pages 
            setCurrentPage={setCurrentPage} 
            currentPage= {currentPage} 
            nPage={nPage} />
    </div>
    )
}
export default Home;
