

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) =>{
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
		case 'SET_EXPENSES':
			return action.expenses;
		default: 
			return state;
	}
};


