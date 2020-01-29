import { NextFunction, Response, Request } from "express";

export const asyncHandler = (handlerFn: any) => async (req: Request, res: Response, next: NextFunction) => {
	try {
	  await handlerFn(req, res);
	  const hasResponded = res.finished || res.headersSent;
	  if (!hasResponded) {
		next();
	  }
	} catch (e) {
	  console.error('🔥 error: %o', e);
	  next(e);
	}
  };