import {createStore} from 'redux'


const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count } = {}) => ({
    type:'SET',
    count

})

const resetCount = () => ({
    type:'RESET'
})
// Reducers
// 1. Reducers are pure functions


const store = createStore((state = { count: 0 }, action) => {

        switch (action.type) {
            case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
            case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
            case 'RESET':
            return {
                count: 0
            }
            case 'SET':
            return{
                count: action.count
            }
            default:
                return state;
        }
});

const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount())

store.dispatch(resetCount({count:0}))

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy:47}))

store.dispatch(setCount({count:3000}))


