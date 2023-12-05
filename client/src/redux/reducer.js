import { GET_ALL_DOGS,
    GET_DOG_BY_NAME,
    GET_TEMPERAMENTS,
    TEMP_ALL_NAMES,
    NAME_BY_ORIGIN,
    ALPHABETIC_ORDER,
    ORDER_BY_WEIGHT, 
    POST_DOG} from "./actions/action-types"

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
                dogsCopy: action.payload
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
        const dogByOrigin= (action.payload === "api")
        ?[...state.allDogs].filter((dog)=> dog.created === false)
        :[...state.allDogs].filter((dog)=> dog.created === true)
            return {
                ...state,
                dogsCopy: dogByOrigin
            }
        case ALPHABETIC_ORDER:
            const orderedDogs= (action.payload ==="ascendent")
             ? state.dogsCopy.sort((dog1, dog2)=> dog1.name.localeCompare(dog2.name))
             : state.dogsCopy.sort((dog1, dog2)=> dog2.name.localeCompare(dog1.name))
                return {
                    ...state,
                    dogsCopy: orderedDogs
                }
        case ORDER_BY_WEIGHT:
            const weight = (action.payload === "lighter")
            ? (state.dogsCopy.sort((dogA,dogB)=> dogA.weight.split("-")[0] - dogB.weight.split("-")[0] ))
            : (state.dogsCopy.sort((dogA,dogB)=> dogB.weight.split("-")[0] - dogA.weight.split("-")[0] ))
            return {
                ...state,
                dogsCopy: weight

            }
        case POST_DOG:
            return {
                ...state,
                allDogs: [...state.allDogs, action.payload],
                dogsCopy:[...state.dogsCopy, action.payload]
            }
        default:
            return {
                ...state
            }
    }
};
export default reducer;