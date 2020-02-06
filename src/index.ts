import express = require('express');
import * as bodyParser from 'body-parser';
import cors = require("cors");
import { router } from './routers/hotels';

const loadExpress = ({ app }: { app: express.Application }) => {
  /**
   * Health Check endpoints
   * @TODO Explain why they are here
   */
  app.get('/status', (_req, res) => {
    res.status(200).end();
  });
  app.head('/status', (_req, res) => {
    res.status(200).end();
  });

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy');

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());

  // Microservice endpoints
  app.use(`/api/`, router);

  /// catch 404 and forward to error handler
  app.use((_req, _res, next) => {
    const err = new Error('Not Found') as any;
    err['status'] = 404;
    next(err);
  });

  /// error handlers
  app.use((err: any, _req: express.Request, res: express.Response, next: express.NextFunction) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res
        .status(err.status)
        .send({ message: err.message })
        .end();
    }
    return next(err);
  });
  app.use((err: any, _req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};


async function startServer() {
	const app = express();

	/**
	 * A little hack here
	 * Import/Export can only be used in 'top-level code'
	 * Well, at least in node 10 without babel and at the time of writing
	 * So we are using good old require.
	 **/
	await loadExpress({ app });
	app.listen(3000, err => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(`
		################################################
		🛡️  Server listening on port: 3000 🛡️ 
		################################################
	  `);
	});
}

startServer();