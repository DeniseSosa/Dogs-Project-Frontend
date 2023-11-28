import { GET_ALL_DOGS, GET_DOG_BY_ID, GET_DOG_BY_NAME } from "./actions/action-types"

const initialState= {
    allDogs: [],
    dogsCopy: [],
    allTemperaments: []

};

const reducer = (state= initialState, action) =>{
    switch(action.type){
        case GET_ALL_DOGS:
            return{
                ...state,
                allDogs: action.payload
            }
        case GET_DOG_BY_NAME:
            return {
                ...state,
                dogsCopy: action.payload
            }
        default:
            return {
                ...state
            }
    }
};
export default reducer;