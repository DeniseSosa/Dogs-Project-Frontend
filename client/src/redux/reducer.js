import { GET_ALL_DOGS } from "./actions/action-types"

const initialState= {
    allDogs: [],
    allTemperaments: []
};

const reducer = (state= initialState, action) =>{
    switch(action.type){
        case GET_ALL_DOGS:
            return{
                ...state,
                allDogs: action.payload
            }
        default:
            return {
                ...state
            }
    }
};
export default reducer;