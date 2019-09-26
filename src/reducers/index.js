import characters from "./character_reducer";
import heroes from "./heros_reducer";
import {combineReducers} from "redux";

const  rootReducer =combineReducers({
    characters,
    heroes
});

export default rootReducer;