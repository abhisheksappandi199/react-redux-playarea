const store ={
    state  : {
        count : 0
    },
    getstate : function(){
        return this.state
    },
    dispatch : function(action){
        if(action.type == 'increment'){
            this.state.count += 1
        }
        else if(action.type == 'decrement'){
            this.state.count -= 1
        }
        else if(action.type == 'reset'){
            this.state.count = 0
        }
        else if(action.type == 'increment_by'){
            this.state.count += action.payload
        }
        return this.getstate()
    }
}

console.log(store.getstate());

//action generators / creators
function increment(){
    return { type : 'increment' }//action 
}

function decrement(){
    return { type : 'decrement'}//action
}

function reset(){
    return { type : 'reset' }//action
}
function incrementBy(n){
    return { type: 'increment_by' , payload : n}
}

console.log(store.dispatch(increment()));
console.log(store.dispatch(increment()));
console.log(store.dispatch(decrement()));
console.log((store.dispatch(reset())));

console.log(store.dispatch(incrementBy(3)));
console.log(store.dispatch(incrementBy(5)));



