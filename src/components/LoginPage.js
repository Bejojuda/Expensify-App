import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
	<div className="box-layout">
		<div className="box-layout__box">
			<h1 className="box-layout__title">Expensify</h1>
			<p>Es momento de controlar tus gastos</p>
			<button className="button" onClick={startLogin}>
				Log In With Google
			</button>
		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

//El primer argumento es mapStateToProps, por eso se pone undefined
export default connect(undefined, mapDispatchToProps)(LoginPage);