import { lag } from "./shared";
import { SeasonName } from "./seasons";

const data = require("./hotels.json");

export interface Hotel {
  name: string;
  starRating: number;
  rooms: Room[];
  peakSeason: SeasonName;
  lowSeason: SeasonName;
}

export interface Room {
  name: string;
  rates: Rate[];
}

export interface Rate {
  name: string;
  pax: number;
  base: number;
  price: number;
}

export async function getAllHotelsFromDb(): Promise<Hotel[]> {
  return lag(() => data, 3000);
}