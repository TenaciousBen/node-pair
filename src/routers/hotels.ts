import { Router, Request, Response } from "express";
import { asyncHandler } from "../helpers/express";
import { request } from "http";

export const router = Router();

// lead search
router.get(
	"/hotels/list",
	asyncHandler(async (request: Request, response: Response) => {
		response.status(200);
		response.send("We got contracts");
	}));

// lead search
router.post(
	"/hotels/search",
	asyncHandler(async (request: Request, response: Response) => {
		let hotelName = request.body.hotelName;
		response.status(200);
		response.send(hotelName);
	}));