import { useState } from "react";
import Temperaments from "./Temperaments";

const Form = () => {
    const[create, setCreate]= useState({})
    const [error, setError]= useState({})

    const onChange= (event)=>{
        setCreate({
            ...create,
            [event.target.name]: event.target.value
            

        })
    }

    return (
        <form>
            <h2>¡Add here your Doggy Soulmate!</h2>
            <label htmlFor="name">Doggy Name:</label>
            <input 
            type="text"
            name="name"
            value={create.name} 
            onChange={onChange}/>

            <label htmlFor="heightMin">Height Min:</label>
            <input
            type="number" 
            name="heightMin"
            value={create.heightMin}
            onChange={onChange} />
            <label htmlFor="heightMax">Height Max:</label>
            <input
            type="number" 
            name="heightMax"
            value={create.heightMax}
            onChange={onChange}/>

            <label htmlFor="weightMin">Weight Min:</label>
            <input 
            type="number" 
            name="weigh"
            value={create.weightMin}
            onChange={onChange} />
            <label htmlFor="weightMax">Weight Max:</label>
            <input 
            type="number" 
            name="Weigh"
            value={create.weightMax} 
            onChange={onChange}/>

            <label htmlFor="life_span">Life Span:</label>
            <input type="radio" 
            value={create.life_span}
            name="life_span"
            onChange={onChange}
            />1-5
            <input type="radio"
            value={create.life_span}
            name="life_span"
            onChange={onChange}
            />5-10
            <input type="radio"
             value={create.life_span}
             name="life_span"
             onChange={onChange}
             />10-15
            <input type="radio"
             value={create.life_span}
             name="life_span"
             onChange={onChange}
             />+15

            <Temperaments onChange={onChange}/>

            <button>Done!</button>

        </form>
    )
};
export default Form;