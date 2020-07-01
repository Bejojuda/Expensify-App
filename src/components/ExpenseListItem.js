import React from 'react';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

						//dispatch también se recibe al hacer object spread
const ExpenseListItem = ({description, amount, createdAt, id}) => (
	<Link className="list-item" to={'/edit/'+id} >
		<div>
			<h3 className="list-item__title">{description}</h3>
			<span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
		</div>
		
		<h3 className="list-item__data">{numeral(amount/100).format('$0.0.00')} </h3>

		{/*

		****
		Esta era la estructura anterior, se cambio para distribuir en 2 groupos:
		La descripción y fecha en uno y el amount en otro, esto permite que el flex
		del scss redistribuya correctamente


		<h3>{description}</h3>

		<p>
			{numeral(amount/100).format('$0.0.00')} 
			- 
			{moment(createdAt).format('MMMM Do, YYYY')}
		</p>
		*/}
	</Link>
);


export default ExpenseListItem;