import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from "react";
import { getTemperaments, tempAllNames } from "../../redux/actions/actions";


const validate = (state) =>{
    let errors= {};
    if(!create.temperament){
        errors.temperament= "An option must be chosen"
    }
}
const Temperaments = ({onChange}) =>{

    const[temp, setTemp]= useState([])
    const [errors,setErrors] = useState({})
    const {allTempCopy} = useSelector(state=> state);
    const dispatch = useDispatch();

    useEffect (()=>{
        dispatch(getTemperaments())
    },[dispatch])

    const handleSection = (event) =>{
        setTemp({
            ...temp,
           [ event.target.name]: event.target.value
        })
        setErrors(validate({
            ...temp,
            [event.target.name]:event.target.value
        })
        )
    }
 
    
    const tempSelected= (event) =>{  
        dispatch(tempAllNames(event.target.value))
        const opciones = event.target.options
        const seleccionadas = []
        for (let i = 0; i < opciones.length; i++) {
          if (opciones[i].selected) {
            seleccionadas.push(opciones[i].value)
          }      
        } 
        setTemp([...temp,seleccionadas])
     }
    //     const options = event.target.options
    //     const selection =[]
    //     options.forEach((op)=> {
    //     if(op.selected) 
    //     selection.push(op.value)
    // })     
    // setTemp([...temp, ...selection])
    // }
        

    return(
        <section onChange={handleSection}>
        <select onChange={tempSelected} multiple >
                <option > Temperaments:</option>
                  { allTempCopy.sort().map(temp => {
                      return  <option value={temp}  key={temp}>{temp}</option>
                  })
                  }
        </select>
        <h4>The selected temperaments are:</h4>
        {
        temp.map((tem)=> <p key={temp.id}>{tem}</p>)
        }
        <label>Didn't find the temperaments? Add it here!!</label>
        <input type="text" name="text" onChange={onChange} />
        {errors.temp && <p>errors.temp</p>}
        </section>
    )
}
export default Temperaments;