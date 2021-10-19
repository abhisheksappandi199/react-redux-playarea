const { createStore , combineReducers } = require('redux')

const countInitialState = 0
const countReducer = (state = countInitialState ,action) =>{
    switch(action.type){
        case 'INCREMENT' : {
            return state + 1
        }
        case 'INCREMENT_BY' : {
            return state + action.payload
        }
        default : {
            return state
        }
    }
}

const productsInitialState = []
const productsReducer = (state = productsInitialState,action )=>{
    switch(action.type){
        case 'ADD_PRODUCT' : {
            return state.concat(action.payload)
        }
        case 'REMOVE_PRODUCT' : {
            return state.filter(product => product.id != action.payload)
        }
        default: {
            return [].concat(state)
        }
    }
}

const store = createStore(combineReducers({
    count : countReducer,
    products : productsReducer
}))

store.subscribe(()=>{
    console.log(store.getState())
})

function increment(){
    return { type : 'INCREMENT'}
}

function incfrement_by (n){
    return { type : 'INCREMENT_BY',payload:n}
}

const addProduct =(product)=>{
    return { type: 'ADD_PRODUCT' , payload:product}
}

const removeProduct =(id)=>{
    return { type : 'REMOVE_PRODUCT',payload:id}
}

const  productInfo1= {
    id : 1,
    name : 'marker',
    price : 10
}
const productInfo2 = {
    id:2,
    name :"scale",
    price :5
}

store.dispatch(increment())
store.dispatch(incfrement_by(3))

store.dispatch(addProduct(productInfo1))
store.dispatch(addProduct(productInfo2))

//listing - all products
console.log('listing',store.getState().products)

//show
console.log('show',store.getState().products.find(product => product.id == 1))

//remove
store.dispatch(removeProduct(2))

