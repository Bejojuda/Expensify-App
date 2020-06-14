import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

 
const AppRouter = () => (
	//Browser solo recibe 1 elemento, es por eso que todo debe estar dentro de un div o de un Switch
	<BrowserRouter> 	{/*BrowserRouter permite establecer todos los Routes dentro de sí*/}
		<div>
			<Header />

			<Switch>		{/*Switch va por los Routes en orden y va a parar cuando se encuentre un match*/}

						{/*El path solo mira si la ruta indicada por lo menos empieza con lo experado
						   Si se quiere que solo se ejecute cuando la ruta sea exactamente igual, se hace exact = true*/}
				<Route path="/" component={ExpenseDashboardPage} exact={true}/>	{/*Cada Route es una ruta que se desea establecer*/}
				<Route path="/create" component={AddExpensePage}/>
				{/*id toma el valor dinamico que se manda luego de edit*/}
				<Route path="/edit/:id" component={EditExpensePage}/>
				<Route path="/help" component={HelpPage}/>
				<Route component={NotFoundPage}/>
			</Switch>

		</div>
	</BrowserRouter>
);

export default AppRouter;