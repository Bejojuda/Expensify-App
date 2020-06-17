import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux'

						//dispatch también se recibe al ahcer object spread
const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => (
	<div>
		<h3>{description}</h3>
		<p>{amount} - {createdAt}</p>
		<button onClick={() => {
				dispatch(removeExpense({id}))
			}
		}>
			Remove Expense
		</button>
	</div>
);

const mapStateToProps = (state) =>{
	return {

	};
};

export default connect()(ExpenseListItem);