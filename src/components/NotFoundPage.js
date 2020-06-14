import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage=() => (
	<div>
		404 - <Link to='/'>Go Home</Link>	{/*Link evita que el navegador haga request al servidor, y en cambio hace client server routing*/}
	</div>
);

export default NotFoundPage;