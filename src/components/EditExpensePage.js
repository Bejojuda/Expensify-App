import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage=(props) => {
	return (
		<div>
			<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">Edit Expense</h1>
				</div>
			</div>
			<div className="content-container">
				<ExpenseForm
					expense={props.expense}
					onSubmit={(expense) =>{
						props.dispatch(startEditExpense(props.match.params.id, expense));
						props.history.push('/');
					}}
					/>

				<button 
					className="button button--secondary"
					onClick={() => {
						props.dispatch(startRemoveExpense({id: props.match.params.id}));
						props.history.push('/');
					}
					}>
					Remove Expense
				</button>
			</div>			
		</div>
	);
}

const mapStateToProps = (state, props) =>{
	return {
		expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
	};
};


export default connect(mapStateToProps)(EditExpensePage);