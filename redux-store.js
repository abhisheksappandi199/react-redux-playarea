const { createStore , combineReducers } = require('redux')

//reducers
const countInitialState = 0
const countReducer = (state = countInitialState, action) => {
    switch(action.type){
        case 'INCREMENT' : {
            return state + 1 
        }
        case 'DECREMENT' : {
            return state - 1
        }
        default : {
            return state
        }
    }
}

const store = createStore(combineReducers({
    count : countReducer
}))

//console.log(store)
console.log('initial state',store.getState());

//subscribe
store.subscribe(()=>{
    console.log(store.getState());
})

//action generator / creator
function increment(){
    return { type : 'INCREMENT'} //action
}

function decrement(){
    return { type: 'DECREMENT' }
}

//action - increament
store.dispatch(increment())
store.dispatch(increment())

store.dispatch(decrement())