import axios from "axios";
import { useQuery } from "react-query";
import { generateBaseCountryUrl } from "./urlGenerator";
import { CountryData } from "../types";

export const useQueryCountry = (
  country: string,
  date?: string | undefined,
  enabled = true
): { data: Partial<CountryData> | undefined; refetch: any } => {
  console.log("1111111, count", country, date);
  const { data, refetch } = useQuery(
    country,
    async (): Promise<Partial<CountryData>> => {
      const result = await axios.get<Partial<CountryData>>(
        generateBaseCountryUrl(country, date)
      );

      return result.data;
    },
    { enabled }
  );

  return { data, refetch };
};
