import { Request, Response, Router } from 'express';
import asyncHandler from '../middlewares/async-handler';
import { SearchRequest, SearchResults } from '../view/search';

export const searchRouter = () => {
	const search = asyncHandler(async (req: Request<unknown, SearchResults, SearchRequest>, res: Response<SearchResults>) => {
		const hotels: SearchResults = [];
		return res.json(hotels);
	});

	return Router()
		.post('', search)
};
