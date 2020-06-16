import {createStore} from 'redux';

//Action generators

const incrementCount = ({incrementBy = 1}) =>({
	type: 'INCREMENT', 
	incrementBy
});


const decrementCount = ({decrementBy = 1}) =>({
	type: 'DECREMENT', 
	decrementBy
});

const resetCount = () => ({type: 'RESET'});

const setCount = ({count}) => ({
	type: 'SET',
	count
});

//Reducers

const countReducer = (state = {count: 0}, action)=> {
	switch (action.type){
		case 'INCREMENT':
			return {
				count: state.count+action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count-action.decrementBy
			};
		case 'SET':
			return {
				count: action.count
			};
		case 'RESET':
			return {
				count: 0
			};
		default:
			return state;
	}
};

//Así es como se indica los valores por defecto del state
const store = createStore(countReducer);

const unSubscribe = store.subscribe(() =>{
	console.log(store.getState());
});

/*store.dispatch({
	type: 'INCREMENT',
	incrementBy: 5
});*/
store.dispatch(incrementCount({incrementBy: 100}));

store.dispatch(incrementCount({}));

store.dispatch(resetCount());

store.dispatch(decrementCount({}));

store.dispatch(decrementCount({decrementBy:200}));

store.dispatch(setCount({count: 200}));

