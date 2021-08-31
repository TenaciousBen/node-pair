export enum SearchOrder {
    Price = "price",
    DiscountAmount = "discount-amount",
    AlphabeticalAZ = "alphabetical-AZ",
    AlphabeticalZA = "alphabetical-ZA"
}

export interface SearchRequest {
    from: string,
    to: string,
    travellers: number,
    orderBy: SearchOrder
}

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