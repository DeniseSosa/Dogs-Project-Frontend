import axios from "axios";
import { GET_ALL_DOGS, GET_DOG_BY_NAME } from "./action-types";



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
    const endpoint = 'http://localhost:3001/name'
    return async (dispatch) => {
        try {
            const {data} = await axios.get(endpoint +`/?name=${name}`)
            return dispatch ({
                type: GET_DOG_BY_NAME,
                payload: data
            })
        } catch (error) {
            return error.message
        }
    }
}