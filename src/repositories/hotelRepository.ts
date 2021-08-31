export interface Availability {
    from: string,
    to: string
}

export interface Hotel {
    id: number;
    name: string;
    starRating: string;
    pricePerNight: number;
    availability: Availability[]
}

export interface HotelRepository {
    get: () => Promise<Hotel[]>;
}

const data: Hotel[] = [
    {
        id: 1, name: "Cheapo Hotel", starRating: "3.5", pricePerNight: 50, availability: [
            { from: "2021-01-01 00:00", to: "2021-03-01 00:00" },
            { from: "2021-05-01 00:00", to: "2021-08-01 00:00" },
            { from: "2021-10-01 00:00", to: "2022-01-01 00:00" },
        ]
    },
    {
        id: 2, name: "El Average Hotel", starRating: "4", pricePerNight: 75, availability: [
            { from: "2021-02-01 00:00", to: "2021-04-01 00:00" },
            { from: "2021-05-01 00:00", to: "2021-08-01 00:00" },
            { from: "2021-09-01 00:00", to: "2021-12-01 00:00" },
        ]
    },
    {
        id: 3, name: "Pricey Hotel", starRating: "4.5", pricePerNight: 100, availability: [
            { from: "2021-01-01 00:00", to: "2022-01-01 00:00" }
        ]
    },
    {
        id: 4, name: "Fancy Hotel", starRating: "5", pricePerNight: 200, availability: [
            { from: "2021-01-01 00:00", to: "2021-05-01 00:00" },
            { from: "2021-07-01 00:00", to: "2022-01-01 00:00" }
        ]
    }
];

const getHotels = async (): Promise<Hotel[]> => {
    return data.slice();
};

export const hotelRepository = (): HotelRepository => ({
    get: getHotels
});