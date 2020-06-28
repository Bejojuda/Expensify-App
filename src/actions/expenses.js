import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';


//ADD_EXPENSE
export const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense
});

//Esta action es la encarga de comunicarse con firebase, y luego activar el addExpense para
//modificar el store
export const startAddExpense = (expenseData = {}) =>{
	//Con Thunk estas funciones son llamadas con el dispatch y con el state
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const  {
			description = '',
			note='', 
			amount=0, 
			createdAt=0
		} = expenseData;

		const expense = { description, note, amount, createdAt };

		//Se hace el push al database, y en el then se llama al addExpense de Redux
		database.ref(`users/${uid}/expenses`).push(expense).then((ref) =>{
			dispatch(addExpense({
				id: ref.key,
				...expense
			}));
		});
	};
};

//REMOVE_EXPENSE

export const removeExpense = ({id}) =>({
	type: 'REMOVE_EXPENSE',
	expense: {
		id
	}
});

export const startRemoveExpense = ({ id }) =>{
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		database.ref(`users/${uid}/expenses/${id}`)
			.remove()
			.then(() =>{
				dispatch(removeExpense({ id }));
			});
	}
};

//EDIT_EXPENSE

export const editExpense = (id, updates) =>({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

export const startEditExpense = (id, updates) =>{
	return (dispatch, getState) =>{
		const uid = getState().auth.uid;

		return database.ref(`users/${uid}/expenses/${id}`).update({
			...updates
		}).then(() =>{
			dispatch(editExpense(id, updates));
		});
	};
};


//SET_EXPENSES
export const setExpenses = (expenses = []) =>({
	type: 'SET_EXPENSES',
	expenses
});

export const startSetExpenses = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) =>{
			const expenses =[];

			snapshot.forEach((childSnapshot) => {
				expenses.push({
					id: childSnapshot.key,  	//.key referencia el identificador del valor puesto por el push()
					...childSnapshot.val()
				});
			});

			dispatch(setExpenses(expenses));
		});
	};
};

/*database.ref('expenses')
	.once('value')
	.then((snapshot) =>{
		const expenses =[];

		snapshot.forEach((childSnapshot) => {
			expenses.push({
				id: childSnapshot.key,  	//.key referencia el identificador del valor puesto por el push()
				...childSnapshot.val()
			});
		});
		console.log(expenses);
	});*/