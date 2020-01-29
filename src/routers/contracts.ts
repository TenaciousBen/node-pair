import { Router, Request, Response } from "express";
import { asyncHandler } from "../helpers/express";
import { request } from "http";

export const contractRouter = Router();

// lead search
contractRouter.get(
	"/contracts/list",
	asyncHandler(async (request: Request, response: Response) => {
		response.status(200);
		response.send("We got contracts");
	}));

// lead search
contractRouter.post(
	"/contracts/search",
	asyncHandler(async (request: Request, response: Response) => {
		let hotelName = request.body.hotelName;
		response.status(200);
		response.send(hotelName);
	}));