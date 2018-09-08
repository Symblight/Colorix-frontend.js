import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import http from 'http';
import path from 'path';

import config from './config';
import userAPI from './routers/user';
import paletteAPI from './routers/palette';

const app = express();

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello');
});


// ==== API ====
app.use('/api/user/', userAPI);
app.use('/api/palette/', paletteAPI);

const server = http.createServer(app).listen(config.port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is up on port: ${config.port}`);
});

export default app;