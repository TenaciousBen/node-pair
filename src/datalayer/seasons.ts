const data = require("./seasons.json");
import { lag } from "./shared";

export type SeasonName = "spring" | "summer" | "autumn" | "winter";
export type MonthName = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";

export interface Season {
	name: SeasonName;
	startMonth: MonthName;
	endMonth: MonthName;
}

export async function getAllSeasonsFromDb(): Promise<Season> {
	return await lag(() => data, 1000);
}