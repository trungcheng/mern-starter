'use strict';

// core module
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import favicon from 'serve-favicon';
import cors from 'cors';

// webpack dependencies
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config';

// config
import init from './init';
import routes from './http/routes';
import redisCache from './services/cache.service';

// Express server
const app = express();
const IS_DEV_MODE = process.env.NODE_ENV !== 'production';
const PORT = IS_DEV_MODE ? 3001 : process.env.PORT;

app.use('/client', express.static('./client'));
app.use('/public', express.static('./public'));

app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());

app.use('/api/v1', routes);

if (IS_DEV_MODE) {
    console.log('Server started in development mode...');
    const compiler = webpack(webpackConfig);
    const devMiddleware = webpackDevMiddleware(compiler, webpackConfig.devServer);
    const hotMiddleware = webpackHotMiddleware(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000
    });

    app.use(devMiddleware);
    app.use(hotMiddleware);

    app.get('/*', (req, res) => {
        res.setHeader('Last-Modified', (new Date()).toUTCString());
        res.sendFile('index.html', { root: './client/' });
    });
} else {
    console.log('Server started in production mode...');
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}

// Connect to MySQL
init(app, redisCache);

app.listen(PORT, err => {
    err
        ? console.error(err)
        : console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', PORT, PORT);
});
