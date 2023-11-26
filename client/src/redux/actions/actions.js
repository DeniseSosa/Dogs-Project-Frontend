import axios from "axios";
import { GET_ALL_DOGS } from "./action-types";


export const getAllDogs= () =>{
    const endpoint = "http://localhost:3001/dogs";
    return async (dispatch)=>{
        try {
            const {data} = await axios.get(endpoint);
            dispatch ({
                type: GET_ALL_DOGS , 
                payload:data
            })
        } catch (error) {
            return error.message
        }
    }
}