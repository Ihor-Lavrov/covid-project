import { BASE_COUNTRY_URL, GRAPH_COUNTRY_URL, WORLD_URL } from "../consts";

export const generateBaseCountryUrl = (country: string, date?: string) =>
  `${BASE_COUNTRY_URL}?country=${country}&date=${date}`;

export const generateGraphCountryUrl = (
  country: string,
  startDate?: string,
  endDate?: string
) => `${GRAPH_COUNTRY_URL}?country=${country}&from=${startDate}&to=${endDate}`;

export const generateWorldUrl = (country: string, date?: string) =>
  `${WORLD_URL}?country=${country}&date=${date}`;
