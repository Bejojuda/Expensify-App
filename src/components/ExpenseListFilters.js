import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
	state = {
		calendarFosused: null
	}

	onDatesChange = ({ startDate, endDate }) =>{
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	}

	onFocusChange = (calendarFosused) => {
		this.setState(() => ({ calendarFosused }));
	}

	render() {
		return (
			<div>
				<input type="text" 
					value={this.props.filters.text} 
					onChange={(e)=>{		//Cuando se ingrese un valor, se hace un dispatch para cambiar el filtro
											//y que se actualice la lista
							this.props.dispatch(setTextFilter(e.target.value))
						}
					} 
					/>
					<select
						onChange={(e) =>{
							if(e.target.value === 'date'){
								this.props.dispatch(sortByDate())
							}
							else if(e.target.value === 'amount'){
								this.props.dispatch(sortByAmount())
							}
						}}
					>
						<option value='date'>Date</option>
						<option value='amount'>Amount</option>
					</select>
					<DateRangePicker
						startDate={this.props.filters.startDate}
						startDateId="Start Date"
						endDate={this.props.filters.endDate}
						endDateId="End Date"
						onDatesChange={this.onDatesChange}
						focusedInput={this.state.calendarFosused}
						onFocusChange={this.onFocusChange}
						showClearDates={true}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		filters: state.filters
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);