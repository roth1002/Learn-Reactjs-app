module.exports = {
	entry: "./app/App.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders:[
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			},
			{
				test: /\.less$/,
				loader: "style!css!less"
			},
			{
			    test: /\.(eot|woff|woff2|ttf|svg|png)$/,
			    loader: "url-loader"
			}
		]
	}
};