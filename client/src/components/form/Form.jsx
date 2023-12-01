import { useState } from "react";

const Form = () => {
    const[create, setCreate]= useState({})
    const [error, setError]= useState({})

    return (
        <form>
            <h2>¡Add here your Doggy Soulmate!</h2>
            <label htmlFor="name">Doggy Name:</label>
            <input 
            type="text"
            name="name"
            value={create.name} />

            <label htmlFor="heightMin">Height Min:</label>
            <input
            type="number" 
            name="heightMin"
            value={create.heightMin} />
            <label htmlFor="heightMax">Height Max:</label>
            <input
            type="number" 
            name="heightMax"
            value={create.heightMax}/>

            <label htmlFor="weightMin">Weight Min:</label>
            <input 
            type="number" 
            name="weigh"
            value={create.weightMin} />
            <label htmlFor="WeightMax">Weight Max:</label>
            <input 
            type="number" 
            name="Weigh"
            value={create.weightMax} />

            <label htmlFor="life_span">Life Span:</label>
            <input type="radio" 
            value={create.life_span}
            name="life_span"
            />1-5
            <input type="radio"
            value={create.life_span}
            name="life_span"
            />5-10
            <input type="radio"
             value={create.life_span}
             name="life_span"
             />10-15
            <input type="radio"
             value={create.life_span}
             name="life_span"
          
             />+15

            <label htmlFor="">Temperaments:</label>
            <select multiple>
                <option value=""></option>
            </select>

            <button>Done!</button>

        </form>
    )
};
export default Form;