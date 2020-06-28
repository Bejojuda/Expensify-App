import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';

export const PrivateRoute = ({ 
	isAuthenticated, 
	component: Component,
	...rest 		//Se obtienen el resto de atributos del props original que no han sido indicados (como isAuthenticated y component)
}) => (
	<Route {...rest} component={(props) => (
		isAuthenticated ? (
			<div>
				<Header />
				<Component {...props}/>			{/*Si se está autenticado, se renderiza el component*/}
			</div>
		) : (
			<Redirect to="/" />				//Si no se está autenticado, se redirecciona
		)
	)}/>
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);