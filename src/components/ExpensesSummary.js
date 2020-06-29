import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses.js';
import selectExpensesTotal from '../selectors/expenses-total.js';

const ExpensesSummary = (props) =>{
	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">
					Viewing 
						<span> {props.expensesCount} </span>
						 {props.expensesCount === 1 ? 'expense': 'expenses'} totaling 
						 <span> {numeral(props.expensesTotal/100).format('$0.0.00')} </span>
				</h1>
				<div className="page-header__actions">
					<Link className="button" to="/create">Add Expense</Link>
				</div>
			</div>
			
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