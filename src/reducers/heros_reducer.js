import {ADD_CHARACTER} from "../actions";
import {createHeros} from './helper.js'
 function heroes(state=[],action){
    switch (action.type) {
        case ADD_CHARACTER:
            let heroes= [...state,createHeros(action.id)]
            return heroes
        default:
            return  state
    }
}
export default heroes;