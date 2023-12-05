import { useDispatch } from "react-redux";
import { useState } from "react";
import style from "./SearchBar.module.css"
import { getAllDogs, getDogByName } from "../../redux/actions/actions";


const SearchBar = ({setCurrentPage}) => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleName= (event) =>{
        event.preventDefault()
        setName(event.target.value)
    }
    
    
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    const onSearch = () =>{
        dispatch(getDogByName(name))
        setName("")
        setCurrentPage(1)
        
    }

    const backAll = () => {
        dispatch(getAllDogs())
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