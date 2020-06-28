import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
	<div>
		<button onClick={startLogin}>Log In</button>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

//El primer argumento es mapStateToProps, por eso se pone undefined
export default connect(undefined, mapDispatchToProps)(LoginPage);