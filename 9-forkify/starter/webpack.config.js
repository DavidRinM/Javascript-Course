const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill','./src/js/index.js'], //dot is current folder
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "js/bundle.js"
    },
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ],
    module: { //for babel
        rules: [
            {
                test: /\.js$/, //babel looks for every js file
                exclude: /node_modules/, //exclude node modules folder
                use: {
                    loader: "babel-loader" //If it is a js file, apply babel
                }
            }
        ]
    }
};
