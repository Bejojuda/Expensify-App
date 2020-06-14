import React from 'react';
import ReactDOM from 'react-dom';

//import IndecisionApp from './components/IndecisionApp';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';	
							

 

//Se renderiza directamente el componente IndecisionApp
ReactDOM.render(<AppRouter />, document.getElementById('app'));
 