import React from 'react';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

						//dispatch también se recibe al hacer object spread
const ExpenseListItem = ({description, amount, createdAt, id}) => (
	<div>
		
		<Link to={'/edit/'+id} ><h3>{description}</h3> </Link>
		<p>
			{numeral(amount/100).format('$0.0.00')} 
			- 
			{moment(createdAt).format('MMMM Do, YYYY')}
		</p>
	</div>
);


export default ExpenseListItem;