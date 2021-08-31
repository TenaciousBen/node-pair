export interface SearchResultOffer {
    name: string;
    discountPercentage: number;
}

export interface SearchResultHotel {
    hotelName: string,
    starRating: number,
    basePrice: number,
    discountedPrice: number,
    offers: SearchResultOffer[],
    experiences: string[]
}