import React from 'react';
import ReactDOM from 'react-dom';

//import IndecisionApp from './components/IndecisionApp';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';	

							
const store = configureStore();

console.log(store.getState());


store.subscribe(()=>{
	const state = store.getState();
	//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

	console.log('state', state);
});

store.dispatch(addExpense({
	description: 'Water bill'
}));

store.dispatch(addExpense({
	description: 'Gas bill'
}));

store.dispatch(setTextFilter('gas'));

const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters);

console.log('Visible ', visibleExpenses);
 

//Se renderiza directamente el componente IndecisionApp
ReactDOM.render(<AppRouter />, document.getElementById('app'));
 