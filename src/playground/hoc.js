//Higher Order Componnent
import React from 'React';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>La info es: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
			<div>
				{props.isAdmin && <p>Esto es info privada</p>}
				{/*Utilizar object spread aquí es equivalente a pasar cada elemento del objeto como props*/}
				<WrappedComponent {...props}/>
			</div>
	);
};

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>

			{props.isAuthenticated ? <WrappedComponent/>: <p>Por favor Login</p>}
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="Esta la info"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Esta la info"/>, document.getElementById('app'));