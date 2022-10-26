const path = require('path');

module.exports = [{
    mode: "production",
    entry: "./src/js/app.js",
    output: {
        path: __dirname + 'js',
        filename: "app.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'js')
    },
    experiments: {
        topLevelAwait: true,
    }
}]