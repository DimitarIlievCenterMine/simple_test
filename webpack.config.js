module.exports = {
	entry: './index.js',
	output: {
		root: './',
		filename: 'bundle.webpack.js'
	},
	module: {
		loaders: [
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader'
			}
		]
	}
}