import React from 'react';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

						//dispatch también se recibe al hacer object spread
const ExpenseListItem = ({description, amount, createdAt, id}) => (
	<div>
		
		<Link to={'/edit/'+id} ><h3>{description}</h3> </Link>
		<p>{amount} - {createdAt}</p>
	</div>
);


export default ExpenseListItem;