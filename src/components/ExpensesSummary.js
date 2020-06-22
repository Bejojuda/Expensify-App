import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses.js';
import selectExpensesTotal from '../selectors/expenses-total.js';
import numeral from 'numeral';

const ExpensesSummary = (props) =>{
	return (
		<div>
			Viewing {props.expensesCount} {props.expensesCount === 1 ? 'expense': 'expenses'} totaling {numeral(props.expensesTotal/100).format('$0.0.00')}
		</div>
	);
}

const mapStateToProps = (state) =>{
	const filteredExpenses = selectExpenses(state.expenses, state.filters);
	return {
		expensesCount: filteredExpenses.length,
		expensesTotal: selectExpensesTotal(filteredExpenses)
	}
};

export default connect(mapStateToProps)(ExpensesSummary);