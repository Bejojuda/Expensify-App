import React from 'react';
import { BrowserRouter, Router, Route, Switch, Link, NavLink, useHistory  } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//import createHistory from 'history/createBrowserHistory';

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute.js'

export const history = createBrowserHistory();	//Permite redireccionar manualmente


const AppRouter = () => (
	//BrowserRouter solo recibe 1 elemento, es por eso que todo debe estar dentro de un div o de un Switch
	//<BrowserRouter> 	{/*BrowserRouter permite establecer todos los Routes dentro de sí*/}

	<BrowserRouter>	{/*Se usa Router porque BrowserRouter ya usa un history internmanete*/}
		<div>
			<Switch>		{/*Switch va por los Routes en orden y va a parar cuando se encuentre un match*/}

						{/*El path solo mira si la ruta indicada por lo menos empieza con lo experado
						   Si se quiere que solo se ejecute cuando la ruta sea exactamente igual, se hace exact = true*/}
				<Route exact path="/" component={LoginPage} />
				<PrivateRoute exact path="/dashboard" component={ExpenseDashboardPage}/>	{/*Cada Route es una ruta que se desea establecer*/}
				<PrivateRoute exact path="/create" component={AddExpensePage}/>
				{/*id toma el valor dinamico que se manda luego de edit*/}
				<PrivateRoute exact path="/edit/:id" component={EditExpensePage}/>
				<Route exact path="/help" component={HelpPage}/>
				<Route component={NotFoundPage}/>
			</Switch>

		</div>
	</BrowserRouter>
	//</BrowserRouter>
);

export default AppRouter;