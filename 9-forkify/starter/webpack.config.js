const path = require("path");

module.exports = {
    entry: './src/js/index.js', //dot is current folder
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "bundle.js"
    }
}