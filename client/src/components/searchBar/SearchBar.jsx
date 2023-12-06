// Hooks
import { useDispatch } from "react-redux";
import { useState } from "react";
// style
import style from "./SearchBar.module.css"
// functions
import { getAllDogs, getDogByName } from "../../redux/actions/actions";


const SearchBar = ({setCurrentPage}) => {
    // me creo un estado local para guardar el name que busco (raza)
    const [name, setName] = useState('');
    // hook
    const dispatch = useDispatch();

    // como seteo el nombre (estado local) con lo que escribì para poder buscarlo
    const handleName= (event) =>{
        event.preventDefault()
        setName(event.target.value)
    }
    
    
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    const onSearch = () =>{
        dispatch(getDogByName(name)) // cuando se monta el componente despacho la action con el name al hacer click en search
        setName("")  // seteo name con string vacio para que no quede escrito en el input el name q ya envié
        setCurrentPage(1) //me quedo en la pagina 1 cuando muestre
        
    }

    const backAll = () => {
        dispatch(getAllDogs()) // para volver a todas las cards
    }
 return(
    <div>
        <form onSubmit={handleSubmit} className={style.searchContainer} >
        <input 
        type="text"
        value={name}
        onChange={handleName}
        placeholder="look for breeds"
        className={style.searchContainer}/>

        <button className={style.searchButton}
        type="submit" 
        onClick= {onSearch}
        >Search: 
        </button>
        </form>
        <button className={style.backAllButton}
        onClick={backAll} 
        >Back all
        </button>
    </div>
    )
}
export default SearchBar;