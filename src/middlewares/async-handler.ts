import { Request, Response, NextFunction, RequestHandler } from 'express';

export default (handlerFn: RequestHandler): RequestHandler =>
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await handlerFn(req, res, next);
			const hasResponded = res.finished || res.headersSent;
			if (!hasResponded) {
				next();
			}
		} catch (e) {
			next(e);
		}
	};
