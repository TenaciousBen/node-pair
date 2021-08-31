export interface Experience {
    id: number;
    name: string;
    hotels: number[];
}

const data: Experience[] = [
    { id: 1, name: "Biking", hotels: [1, 4] },
    { id: 2, name: "Surfing", hotels: [1, 2] },
    { id: 3, name: "Skiing", hotels: [3, 4] },
    { id: 4, name: "Gourmet", hotels: [3, 4] },
    { id: 5, name: "Beach", hotels: [1, 2] },
    { id: 6, name: "Sports", hotels: [3, 4] },
    { id: 7, name: "Concerts", hotels: [2] },
    { id: 8, name: "Art", hotels: [1] }
];

const getExperiences = async (): Promise<Experience[]> => {
    return data.slice();
};

export const experienceRepository = () => ({
    get: getExperiences
});