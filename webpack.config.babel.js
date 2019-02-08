import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	entry: './src/index.js',
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: path.resolve(__dirname, 'node_modules'),
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: [
						['@babel/plugin-proposal-class-properties', { loose: true }],
						'@babel/plugin-syntax-dynamic-import'
					]
				}
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				loader: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	devtool: 'source-map',
	resolve: {
		alias: {
			Actions: path.resolve(__dirname, 'src/state/actions'),
			Icons: path.resolve(__dirname, 'src/components/icons')
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'React To-Do App',
			favicon: path.resolve(__dirname, 'public/favicon.ico'),
			template: path.resolve(__dirname, 'public/index.html'),
			filename: 'index.html'
		})
	]
}