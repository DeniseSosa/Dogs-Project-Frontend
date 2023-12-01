import { useState } from "react";
import { useDispatch } from "react-redux";
import Temperaments from "./Temperaments";
import validation from "./validations";
import { postDog } from "../../redux/actions/actions";



const Form = () => {
    const[create, setCreate]= useState({})
    const [errors, setErrors]= useState({})
    const dispatch = useDispatch()

    const onChange= (event)=>{
        setCreate({
            ...create,
            [event.target.name]: event.target.value
        })
        setErrors(validation(create))
    }

    const handleSubmit = (event)=> {
        event.preventDefault()
       dispatch(postDog())
    }

    return (
        <form  onSubmit={handleSubmit}>
            <h2>¡Add here your Doggy Soulmate!</h2>
            <label htmlFor="name">Doggy Name:</label>
            <input 
            type="text"
            name="name"
            value={create.name} 
            onChange={onChange}/>
            {
                errors.name && <p>{errors.name}</p>
            }

            <label htmlFor="heightMin">Height Min:</label>
            <input
            type="text" 
            name="heightMin"
            value={create.heightMin}
            onChange={onChange} />
              {
                errors.heightMin && <p>{errors.heightMin}</p>
            }

            <label htmlFor="heightMax">Height Max:</label>
            <input
            type="text" 
            name="heightMax"
            value={create.heightMax}
            onChange={onChange}/>
               {
                errors.heightMax && <p>{errors.heightMax}</p>
            }

            <label htmlFor="weightMin">Weight Min:</label>
            <input 
            type="text" 
            name="weigh"
            value={create.weightMin}
            onChange={onChange} />
                {
                errors.weightMin && <p>{errors.weightMin}</p>
            }

            <label htmlFor="weightMax">Weight Max:</label>
            <input 
            type="text" 
            name="Weigh"
            value={create.weightMax} 
            onChange={onChange}/>
                   {
                errors.weightMax && <p>{errors.weightMax}</p>
            }

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

            <Temperaments onChange={onChange} name="temperament" value={create.temperament}/>

            
            {
                errors.temperament && <p>{errors.temperament}</p>
            }
            <button >Done!</button>

        </form>
    )
};
export default Form;