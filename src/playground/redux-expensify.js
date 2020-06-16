import {createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid';

//Action generators

//ADD_EXPENSE


const addExpense = ({description = '',note='', amount=0, createdAt=0} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuidv4(),
		description,
		note, amount,
		createdAt
	}
});

//REMOVE_EXPENSE

const removeExpense = ({id}) =>({
	type: 'REMOVE_EXPENSE',
	expense: {
		id
	}
});

//EDIT_EXPENSE

const editExpense= (id, updates) =>({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

//SET_TEXT_FILTER

const setTextFilter = (text = '') =>({
	type: 'SET_TEXT_FILTER',
	text
});

//SORT_BY_DATE

const sortByAmount =() => ({
	type: 'SORT_BY_AMOUNT'
});

//SORT_BY_AMOUNT

const sortByDate =() => ({
	type: 'SORT_BY_DATE'
});

//SET_START_DATE
const setStartDate = (date=undefined) => ({
	type: 'SET_START_DATE',
	date
});

//SET_END_DATE

const setEndDate = (date=undefined) => ({
	type: 'SET_END_DATE',
	date
});

//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer= (state = expensesReducerDefaultState, action) =>{
	switch(action.type){
		case 'ADD_EXPENSE':
			return [
				...state,			//Esto es el spread operator, cuando se crea el nuevo arreglo, se pone en la posición el arreglo de state
				action.expense
			];
		case 'REMOVE_EXPENSE':
			return state.filter((expense) => expense.id !== action.expense.id);

		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if(expense.id === action.id){
					return {...expense, ...action.updates}
				}
				else{
					return expense;
				}
			});
		default: 
			return state;
	}
};

//filters Reducer

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer= (state = filtersReducerDefaultState, action) =>{
	switch(action.type){
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			}
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			}
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			}
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.date
			}
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.date
			}
		default:
			return state;
	};
};

// Get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) =>{
	
	return expenses.filter((expense) =>{
		const startDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !=='number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a,b) =>{
		if (sortBy==='date'){
			return a.createdAt<b.createdAt ? 1 : -1;
		}
		else if (sortBy==='amount'){
			return a.amount<b.amount ? 1: -1;
		}
	});
};

//State creation

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

store.subscribe(()=>{
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

	console.log('visibleExpenses', visibleExpenses);
});

//store.dispatch(setStartDate(2));

store.dispatch(sortByAmount());

const expenseOne = store.dispatch(addExpense({
	description: 'Renta',
	amount: 1000,
	createdAt: -20111
}));


const expenseTwo = store.dispatch(addExpense({
	description: 'Coffe',
	amount: 300,
	createdAt: 1
}));
store.dispatch(setTextFilter('Holas'));

/*store.dispatch(removeExpense({id: expenseOne.expense.id}));

store.dispatch(editExpense(expenseTwo.expense.id, {	description: 500}));

store.dispatch(setTextFilter('Holas'));

store.dispatch(sortByDate());*/

//store.dispatch(setEndDate(1250));

const demoState = {
	expenses: [{
		id: 'avfiivjdkovdkvdf',
		description: 'La renta!',
		note: 'Payment final de la renta',
		amount: 50500,
		createdAt: 0
	}],
	filters:{
		text: 'rent',
		sortBy: 'amount', //date o amount
		startDate: undefined,	//Fechas inciales y finales para hacer filtro
		endDate: undefined
	}
};
