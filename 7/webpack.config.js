var path = require('path');
const SERVER_PORT = process.env.SERVER_PORT || 8080;

module.exports = {
    entry: "./entry.js",
    output: {
        path: path.join(__dirname + '/public'), //For webpack ONLY, location to generate the bundle.js
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    devServer: {
        port: SERVER_PORT,
        inline: true,
        contentBase: path.join(__dirname, '/public') //For webpack-dev-server, serveing static location
    }
};
