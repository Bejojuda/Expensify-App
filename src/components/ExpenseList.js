import React from 'react';
import { connect } from 'react-redux';			//Permite conectarse al store
import ExpenseListItem  from './ExpenseListItem';
import ExpensesSummary from './ExpensesSummary';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total.js';
import numeral from 'numeral';

const ExpenseList = (props) => (
	<div>
		
		<h1>Expense List</h1>
		<ExpensesSummary />
		{
			props.expenses.map((expense) => 
				<ExpenseListItem 
					key={expense.id}
					{...expense}
					/>
			)
		}
	</div>
);

//Relaciona el store state con el props a usar en connect
const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

//connect() retorna la función QUE RETORNA el Higher Order Component (ver /playground/hoc)
//por eso hay que llamarlo con el (ExpenseList)
export default connect(mapStateToProps)(ExpenseList);
