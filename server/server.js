const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//* se obtiene cuando la ruta especificada no existe en el servidor
//Significa que, como server.js no sabe nada del React Routing, no sabe
//que las rutas /create, /help etc, en realidad existen, por lo que cuando
//se llegue a una de esas urls, se ejecuta este get
app.get('*', (req, res) => {
	//envia el index.html cuando se obtiene este get
	res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () =>{
	console.log('Buenas buenas');
});