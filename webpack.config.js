const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/index.js', //this the project entry point
    output:{
        path: path.resolve(__dirname,'dist'), //It allows us to know where my project is and how to use it.
        filename:'main.js' //the place where we saved the resourse after webpack
    },
    resolve:{
        extensions: ['.js','jsx'] //Allowed extensions
    },
    module: {
        rules:[ //rules that we work in this project
            { //is assigned to each loader (optimizer), what type of file it will work with and what rules it will work with
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use:[{
                    loader: 'html-loader'
                }]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname,'public'),
        },
        compress: true,
        port: 3006
    }
}