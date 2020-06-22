const path = require('path');
//Permite extrar css del bundle y guardarlo en un archivo externo
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');

	return {
		entry: './src/app.js',			//Archivo con el que se inicia webpack
		output: {
			path: path.join(__dirname, 'public', 'dist'), 
			filename: 'bundle.js'
		},
		mode: 'development',
		module:{
			rules: [{
				loader: 'babel-loader',			//Indica el "traductor" que se usará para los archivos que se .js
				test: /\.js$/,					//ejecuta cuando se hace un cambio a archivos .js
				exclude: /node_modules/
			}, 
		     /*{
		        test: /\.s?css$/i,
		        use: [
		        	'style-loader',
		        	'css-loader',
		        	'sass-loader'
		        ]
		    }]*/
		     {
		        test: /\.s?css$/i,
		        use: [
		          {
		            loader: MiniCssExtractPlugin.loader,
		            options: {
		              publicPath: './public/styles.css',
		            },
		          },
		          'css-loader',
				  'sass-loader'
		        ],
		     }]
		     /*{
				test: /\.s?css$/,					//Esto se necesita para ejecutar scss y opcionalment css
				use: CSSExtract.extract({
					use: [
						'css-loader',
						'sass-loader'
					]
				})
			}]*/

		},
		plugins: [
			new MiniCssExtractPlugin()
			//CSSExtract
		],
		devtool: isProduction? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true,
			publicPath: '/dist/'
		}
	}
};
