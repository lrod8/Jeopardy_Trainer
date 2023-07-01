const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); 

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                // loader: require.resolve('babel-loader'),
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
        {
            // title: 'Development',
            // templateContent: ({HtmlWebpackPlugin}) => '<html><head></head><body><h1>Build Tools Challenge</h1><div id="root"></div></body></html>'
            template: './client/index.html',
            filename: '.index.html',
        }),
    ],
    resolve: {
        modules: [__dirname, 'client', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    devServer: {
      static: {
          directory: path.join(__dirname, 'build'),
          publicPath: '/build'
      },
      // compress: true,
      port: 8080,
        proxy: {
          '/api': 'http://localhost:3000',
        },
    },
};
//   module: {
//     rules: [
//         { 
//           test: /\.jsx?/, 
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: [
//                 [`@babel/preset-env`],
//                 [`@babel/preset-react`]
//               ],
//             }
//           } 
//         },
//         //CSS rules 
//         {
//           test: /\.s[ac]ss$/i,
//           use: ['style-loader', 'css-loader', 'sass-loader']  
//         }
//     ],
//   },
// }