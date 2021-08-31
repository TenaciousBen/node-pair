import { Request, Response, Router } from 'express';
import asyncHandler from '../middlewares/async-handler';

export const searchRouter = () => {
	const search = asyncHandler(async (req: Request, res: Response) => {
		return res.json({ message: "hello" });
	});

	return Router()
		.get('', search)
};
