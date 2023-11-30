import { ALPHABETIC_ORDER, GET_ALL_DOGS,
      GET_DOG_BY_NAME,
     GET_TEMPERAMENTS,
     TEMP_ALL_NAMES,
     NAME_BY_ORIGIN,
    ALPHABETIC_ORDER } from "./actions/action-types"

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
        case NAME_BY_ORIGIN:
        const dogByOrigin= (action.payload === "apiTemperaments")
        ?[...state.allDogs].filter((dog)=> dog.created=== false)
        :[...state.allDogs].filter((dog)=> dog.created=== true)
            return {
                ...state,
                dogsCopy: dogByOrigin
            }
        case ALPHABETIC_ORDER:
            if(action.payload ==="ascendent"){
                return {
                    ...state,
                    dogsCopy: [...state.allDogs].sort((dog1,dog2)=> dog1.name.toLowerCase() < dog2.name.toLowerCase())
                }
            }else{
                return {
                    ...state,
                    dogsCopy: [...state.allDogs].reverse.sort((dog1, dog2)=> dog1.name.toLowerCase() > dog2.name.toLowerCase() )
                }
            }

        default:
            return {
                ...state
            }
    }
};
export default reducer;