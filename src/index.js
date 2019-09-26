import React from 'react'
import  ReactDom from 'react-dom'
import App from "./App";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from './reducers'
import {addCharacterById }from './actions'
const store = createStore(rootReducer)
store.subscribe(()=>console.log(store.getState()))
store.dispatch(addCharacterById(1))

ReactDom.render (
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root'))
