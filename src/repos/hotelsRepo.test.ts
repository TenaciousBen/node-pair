import { getAllHotels } from "./hotelRepo";

describe("hotels repo", () => {
	it("can fetch all hotels", async () => {
		const hotels = await getAllHotels();
		expect(hotels.length).toBe(3);
		expect(hotels.find(h => h.name === "OK place")).toBeTruthy();
		expect(hotels.find(h => h.name === "Nice place")).toBeTruthy();
		expect(hotels.find(h => h.name === "Great place")).toBeTruthy();
	});
});