import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { errors } from 'celebrate';
import * as method_override from 'method-override';
import { searchRouter } from './routers/search-router';

const port = 3000;

const app = express();

app.get('/status', (_req, res) => res.status(200).end());
app.head('/status', (_req, res) => res.status(200).end());
app.enable('trust proxy');
app.use(cors());
app.use(method_override());
app.use(bodyParser.json());

// router

const searchRouterInstance = searchRouter();
app.use('/api/search', searchRouterInstance);

// errors

app.use(errors());

app.use((_req, _res, next) => {
	const err = new Error('Not Found');
	err['status'] = 404;
	next(err);
});
app.use((err, _req, res, _next) => {
	res.status(err.status || 500);
	res.json({ errors: { message: err.message } });
});
app.use((err, _req, res) => {
	res['status'](err['status'] || err['isJoi'] ? 400 : 500);
	res['json']({ errors: { message: err['message'] } });
});

app.listen(port, () => {
	console.info(`
      ################################################
      🛡️  Server listening on port: ${port} 🛡️
      ################################################
    `);
});
