var path = require('path');

module.exports = {
    entry: "./entry.js",
    output: {
        path: path.join(__dirname + '/public'), //For webpack ONLY, location to generate the bundle.js
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    devServer: {
        port: 3000,
        inline: true,
        contentBase: path.join(__dirname, '/public') //serveing static location
    }
};
