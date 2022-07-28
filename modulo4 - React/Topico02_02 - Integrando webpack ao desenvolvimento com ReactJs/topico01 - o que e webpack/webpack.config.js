const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',//ponto de entrada onde o webpack vai começar pegar todos os arquivos
    output: {//essa é a saída quando vai ser compilado nosso arquivo, que vai ser jogado no bundler o webpack gerencia tudo isso.
        path: path.resolve(__dirname,'dist'),
        filename: 'bundler.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin ({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}
    

