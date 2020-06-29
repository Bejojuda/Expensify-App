import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

//const now = moment();
//console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {

	constructor (props){
		super(props);
		this.state = {
			description: props.expense ? props.expense.description: '',
			note: props.expense? props.expense.note : '',
			amount: props.expense ? (props.expense.amount /100).toString() : '',
			createdAt: props.expense ? moment(props.expense.createdAt): moment(),
			calendarFocused: false,
			error: undefined,
			action: props.expense ? 'Change Expense' : 'Add Expense'
		}
	}

	onDescriptionChange = (e) =>{
		const description = e.target.value;
		this.setState(() => ({description}));
	}

	onNoteChange= (e) =>{
		const note = e.target.value;

		this.setState(() => ({note}));
	}

	onAmountChange = (e) =>{
		const amount = e.target.value;

		//.match permite evaluar Regular expresions para ver si
		//amount cumple con las condiciones
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
			this.setState(() => ({amount}));
		}
	}

	onDateChange = (createdAt) =>{
		if(createdAt){
			this.setState(() => ({createdAt}));
		}
	}

	onFocusChange = ({ focused }) =>{
		this.setState(() => ({ calendarFocused: focused }))

	}

	onSubmit = (e) =>{
		e.preventDefault();

		if(!this.state.description || !this.state.amount){
			this.setState(() => ({error: 'Ingrese la descripción y el amount'}))
		}
		else{
			this.setState(() => ({error: undefined}));
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			})
		}
	}

	render(){
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onSubmit}>
					<input 
						className="text-input"
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input
						className="text-input"
						type="text"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}

					/>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}				//Muestra 1 mes a la vez
						isOutsideRange={() => false}	//Permite seleccionar dias en el pasado

					/>
					<textarea
						className="textarea"
						placeholder="Agregar nota para el expense (opcional)"
						onChange={this.onNoteChange}
						value={this.state.note}
					>
					</textarea>
					<button>{this.state.action} </button>
				</form>
			</div>
		);
	}
}