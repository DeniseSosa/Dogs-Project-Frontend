import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from "react";
import { getTemperaments, tempAllNames } from "../../redux/actions/actions";
const Temperaments = () =>{
    const[temp, setTemp]= useState([])
    const {allTempCopy} = useSelector(state=> state);
    const dispatch = useDispatch();

    useEffect (()=>{
        dispatch(getTemperaments())
    },[dispatch])
 
    
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
        <section>
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
        <input/>
        <label>Add a new temperament Here!</label>
        </section>
    )
}
export default Temperaments;