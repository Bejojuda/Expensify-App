const path = require('path');



module.exports = {
	entry: './src/playground/hoc.js',			//Archivo con el que se inicia webpack
	output: {
		path: path.join(__dirname, 'public'), 
		filename: 'bundle.js'
	},
	mode: 'development',
	module:{
		rules: [{
			loader: 'babel-loader',			//Indica el "traductor" que se usará para los archivos que se .js
			test: /\.js$/,					//ejecuta cuando se hace un cambio a archivos .js
			exclude: /node_modules/
		},{
			test: /\.s?css$/,					//Esto se necesita para ejecutar scss y opcionalment css
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]

	},
	devtool: 'cheap-module-eval-source-app',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true
	}
};