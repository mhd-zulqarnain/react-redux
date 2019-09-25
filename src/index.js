import React from 'react'
import  ReactDom from 'react-dom'
import App from "./App";
import {createStore} from 'redux'


/*store -->gloablize state
place to store the state
 */

/*
* Action
* tells what changes to be done just a plan javascript
* */

const  increment=()=>{
    return {
        type:'INCREMENT'
    }
};
const decrement= ()=>{
    return {
        type:'DECREMENT'
    }
};
/*
* REDUCER
* APPLY CHANGES TO STORE
* */
const reducer=(state= 0 ,action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return state +=1;
        case 'DECREMENT':
            return  state -=1;
        default:
            return state;

    }
};
//store give and reducer and subscribe for listern to its changes
let store= createStore(reducer);
store.subscribe(()=>console.log(store.getState()));

/*dispacter
* trigger the changes using action*/

store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());

ReactDom.render (
    <App/>,document.getElementById('root'));
