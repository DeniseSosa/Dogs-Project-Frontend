import { useDispatch } from "react-redux";
import { useState } from "react";
//import axios from "axios"
import { getDogByName } from "../../redux/actions/actions";

const SearchBar = () => {
    const [name,  setName] = useState("");
    const dispatch = useDispatch();

    const handleName= (event) =>{
        setName(event.target.value)
        event.preventDefault()
    }

    const onSearch = (event) =>{
        dispatch(getDogByName(name))
        event.preventDefault()
    }
    return(
    <div>
        <input 
        type="text"
        value={name}
        onChange={handleName}
        placeholder="look for breeds"/>
        <button 
        type="submit"
        onClick={onSearch} >Search</button>
    </div>)
}
export default SearchBar;