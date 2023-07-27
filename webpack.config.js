const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'main.js',
        path : path.resolve(__dirname, 'dest'),
    },
    module : {
        rules : [
            {
                test : /\.css$/i,
                use : [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test : /\.scss$/i,
                use : [
                'style-loader',
                'css-loader',
                'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    }
}
