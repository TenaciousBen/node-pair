import { getAllHotelsFromDb, Hotel } from "../datalayer/hotels";

export async function getAllHotels(): Promise<Hotel[]> {
	return await getAllHotelsFromDb();
}