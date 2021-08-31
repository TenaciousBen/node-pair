import { Request, Response, Router } from 'express';
import asyncHandler from '../middlewares/async-handler';
import { SearchRequest, SearchResultHotel } from '../view/search';

export const searchRouter = () => {
	const search = asyncHandler(async (req: Request<unknown, SearchResultHotel[], SearchRequest>, res: Response<SearchResultHotel[]>) => {
		const hotels: SearchResultHotel[] = [];
		return res.json(hotels);
	});

	return Router()
		.get('', search)
};
