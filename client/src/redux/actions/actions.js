import axios from "axios";
import { GET_ALL_DOGS,
     GET_DOG_BY_NAME,
     GET_TEMPERAMENTS,
     TEMP_ALL_NAMES,
     NAME_BY_ORIGIN,
     ALPHABETIC_ORDER,
     ORDER_BY_WEIGHT,
     POST_DOG} from "./action-types";


    
    export const getAllDogs= () =>{
    const endpoint = "http://localhost:3001/dogs";
    return async (dispatch)=>{
        try {
            const {data} = await axios.get(endpoint);
            return dispatch ({
                type: GET_ALL_DOGS , 
                payload:data
            })
        } catch (error) {
            return error.message
        }
    }
}
export const getDogByName = (name) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/name?name=${name}`)
            return dispatch ({
                type: GET_DOG_BY_NAME,
                payload:data
            })
        } catch (error) {
            return error.message
        }
    }
}

export const getTemperaments = () =>{
    const endpoint= "http://localhost:3001/temperaments"
    return async(dispatch)=>{
        try {
            const {data} = await axios.get(endpoint)
            return dispatch ({
                type: GET_TEMPERAMENTS,
                payload: data
            })
        } catch (error) {
           return error.message
            
        }
    }
}
export const tempAllNames= (temp) =>{
    return ({type:TEMP_ALL_NAMES, payload:temp})
}

export const nameByOrigin = (origin) =>{
    return ({type: NAME_BY_ORIGIN, payload:origin})
}
export const alphabeticOrder = (order) =>{
    return ({type: ALPHABETIC_ORDER, payload: order })
}
export const orderByWeight= (weightOrder) =>{
    return ({type: ORDER_BY_WEIGHT, payload: weightOrder})
}

export const postDog = (create) =>{
    return async (dispatch) =>{
        const endpoint = "http://localhost:3001/dogs";
        try {
            const {data} = await axios.post(endpoint, create)
            alert("created successfully")
            return dispatch ({
                type: POST_DOG,
                payload: data
            })
            
        } catch (error) {
            return alert("Not created correctly")
        }
    }
}
