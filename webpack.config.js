module.exports = {
	mode: "production",
	entry: "./app/assets/scripts/App.js",
	output: {
		path: __dirname + "/app/temp/scripts",
		filename: "App.js"
	}
} 