import { useDispatch } from "react-redux";
import { useState } from "react";
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
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={name}
        onChange={handleName}
        placeholder="look for breeds"/>
        <button 
        type="submit" onClick= {onSearch}>Search: </button>
        </form>
        <button onClick={backAll} >Back all</button>
    </div>
    )
}
export default SearchBar;