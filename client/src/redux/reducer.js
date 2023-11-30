import { GET_ALL_DOGS, GET_DOG_BY_ID, GET_DOG_BY_NAME, GET_TEMPERAMENTS, TEMP_ALL_NAMES } from "./actions/action-types"

const initialState= {
    allDogs: [],
    dogsCopy: [],
    allTemperaments: [],
    allTempCopy: []

};

const reducer = (state= initialState, action) =>{
    switch(action.type){
        case GET_ALL_DOGS:
            return{
                ...state,
                allDogs: action.payload,
                dogsCopy: action.payload
            }
        case GET_DOG_BY_NAME:
            return {
                ...state,
                allDogs: action.payload
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                allTemperaments: action.payload,
                allTempCopy: action.payload
            }
        case TEMP_ALL_NAMES:
   
            return {
                ...state,
                dogsCopy: [...state.allDogs].filter((dog)=> dog.temperament?.includes(action.payload))
            }
        case TEMP_BY_ORIGIN:
        const dogByOrigin= (action.payload === "apiTemperaments")
        ?[...state.allDogs].filter((dog)=> dog.created=== true)
        :[...state.allDogs].filter((dog)=> dog.created=== false)
            return {
                dogsCopy: dogByOrigin
            }
        default:
            return {
                ...state
            }
    }
};
export default reducer;