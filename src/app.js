import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import IndecisionApp from './components/IndecisionApp';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';	
import { firebase } from'./firebase/firebase';


						
//Store permite manejar datos entre componentes del frontend
const store = configureStore();


 
const jsx = (
	<Provider store={store} >
		<AppRouter />
	</Provider>
);

ReactDOM.render(<p>Cargando...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() =>{
	
	//Se renderiza directamente el componente IndecisionApp
	ReactDOM.render(jsx, document.getElementById('app'));
});



firebase.auth().onAuthStateChanged((user) =>{
	if (user) {
		console.log('Log in');
	}else{
		console.log('Log out');
	}
});
//Se ejecuta en cada dispatch que se hace
/*store.subscribe(()=>{
	const state = store.getState();
	//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

	console.log('state', state);
});*/

 
/*
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

console.log('Visible ', visibleExpenses);*/