import { Availability } from "./hotelRepository";

export interface Offer {
    id: number;
    name: string;
    discountPercentage: number;
    hotels: number[];
    dates: Availability;
    minTravellers: number;
}

const data: Offer[] = [
    { id: 1, name: "January Sale", discountPercentage: 15, hotels: [1, 2, 3, 4], dates: { from: "2021-01-01 00:00", to: "2021-02-01 00:00" }, minTravellers: 1 },
    { id: 2, name: "Summer Sale", discountPercentage: 5, hotels: [1, 2], dates: { from: "2021-06-01 00:00", to: "2021-09-01 00:00" }, minTravellers: 1 },
    { id: 3, name: "Christmas Sale", discountPercentage: 10, hotels: [3, 4], dates: { from: "2021-12-01 00:00", to: "2022-01-01 00:00" }, minTravellers: 1 },
    { id: 4, name: "Large Group Discount", discountPercentage: 25, hotels: [1, 2, 3, 4], dates: { from: "2021-01-01 00:00", to: "2022-01-01 00:00" }, minTravellers: 4 },
];

const getOffers = async (): Promise<Offer[]> => {
    return data.slice();
};

export const offerRepository = () => ({
    get: getOffers
});