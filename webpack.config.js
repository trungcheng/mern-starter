const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'client/app');

const isProd = (process.env.NODE_ENV === 'production');

const webpackConfig = {
    entry: [
        "babel-polyfill",
        "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
        APP_DIR + '/app.js'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: APP_DIR,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader'],
                include: APP_DIR
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(jpg|png|gif|mp4|webm)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.IgnorePlugin(/node-fetch/),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(isProd ? 'production' : 'development')
            }
        }),
        // new webpack.optimize.CommonsChunkPlugin({ name: 'common' }),
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'client/index.html'),
            inject: false
        })
    ]
}

if (isProd) {
    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false, // Suppress uglification warnings
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true
            },
            output: {
                comments: false,
            },
            exclude: [/\.min\.js$/gi] // skip pre-minified libs
        })
    )
} else {
    webpackConfig.plugins[0] = new webpack.HotModuleReplacementPlugin();
    webpackConfig.devServer = {
        contentBase: BUILD_DIR,
        overlay: true,
        hot: true,
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        },
        historyApiFallback: true,
        host: '127.0.0.1',
        port: 1331
    };
    webpackConfig.devtool = 'eval-source-map';
}

module.exports = webpackConfig;
