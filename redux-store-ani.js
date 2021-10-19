const { createStore, combineReducers } = require('redux') // npm install redux 

// reducers
const countInitialState = 0 
const countReducer = (state = countInitialState, action) => { 
    switch(action.type) {
        case 'INCREMENT' : {
            return state + 1
        }
        case 'DECREMENT' : {
            return state - 1
        }
        default: {
            return state 
        }
    }
 }
//store
const store = createStore(combineReducers({
    count: countReducer
}))

// console.log(store)
console.log('inital state', store.getState())

// subscribe 
store.subscribe(() => {
    console.log(store.getState())
})

// action generator / creator 
function increment() {
    return { type: 'INCREMENT' } // action
}

function decrement() {
    return { type: 'DECREMENT' }
}

// action - increment 
store.dispatch(increment())
store.dispatch(increment())

store.dispatch(decrement())
