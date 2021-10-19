const { createStore, combineReducers } = require('redux')

const countInitialState = 0 
const countReducer = (state = countInitialState, action) => {
    switch(action.type) {
        case 'INCREMENT' : {
            return state + 1
        }
        case 'INCREMENT_BY' : {
            return state + action.payload
        }
        default: {
            return state 
        }
    }
}

const productsInitialState = []
const productsReducer = (state = productsInitialState, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT' : {
            return state.concat(action.payload)
        }
        case 'EDIT_PRODUCT' : {
            return state.map((product) => {
                if(product.id == action.payload.id) {
                    return Object.assign({}, product, action.payload.obj) 
                } else {
                    return Object.assign({}, product)
                }
            })
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
    count: countReducer,
    products: productsReducer
}))

store.subscribe(() => {
    console.log(store.getState())
})

console.log('initial state',store.getState())

// action generators / creators 
const increment = () => {
    return { type: 'INCREMENT' }
}

const incrementBy = (n) => {
    return { type: 'INCREMENT_BY', payload: n }
}

const addProduct = (product) => {
    return { type: 'ADD_PRODUCT', payload: product}
}

const removeProduct = (id) => { 
    return { type: 'REMOVE_PRODUCT', payload: id}
}

const editProduct = (id, obj) => {
    return { type: 'EDIT_PRODUCT', payload: { id, obj }}
}

// add a product 
const productInfo = {
    id: 1, 
    name: 'marker', 
    price: 10 
}

const productInfo2 = {
    id: 2,
    name: 'scale',
    price: 5
}

store.dispatch(increment())
store.dispatch(incrementBy(3))

store.dispatch(addProduct(productInfo))
store.dispatch(addProduct(productInfo2))

// listing - all products 
console.log('listing',store.getState().products)

// show 
console.log('show', store.getState().products.find(product => product.id == 1))

// remove 
store.dispatch(removeProduct(2))

// edit product 
store.dispatch(editProduct(1, { price: 15}))