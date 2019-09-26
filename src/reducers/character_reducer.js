import character_json from '../data/characters'

import {ADD_CHARACTER} from '../actions'

function characters(state= character_json ,action ){
    switch (action.type) {
        case ADD_CHARACTER:
            return state = state.filter(item=>item.id!==action.id)
        default:
            return state;
    }
}

export default characters;