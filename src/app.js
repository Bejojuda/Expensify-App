import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import IndecisionApp from './components/IndecisionApp';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';	


						
//Store permite manejar datos entre componentes del frontend
const store = configureStore();


//Se ejecuta en cada dispatch que se hace
/*store.subscribe(()=>{
	const state = store.getState();
	//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

	console.log('state', state);
});*/


//Dispatch activa los Reducers del store. addExpense es un action generator que retorna 
//el tipo de action que ejecutará el reducer y los datos que se le pasarán
store.dispatch(addExpense({
	description: 'Water bill',
	createdAt: 1000
}));

store.dispatch(addExpense({
	description: 'Gas bill',
	amount: 4500
}));

store.dispatch(addExpense({
	description: 'Renta',
	amount: 109500
}));


//store.dispatch(setTextFilter('gas'));

const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters);

console.log('Visible ', visibleExpenses);
 
const jsx = (
	<Provider store={store} >
		<AppRouter />
	</Provider>
);

//Se renderiza directamente el componente IndecisionApp
ReactDOM.render(jsx, document.getElementById('app'));
 