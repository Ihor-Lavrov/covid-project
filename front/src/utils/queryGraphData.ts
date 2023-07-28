import React from "react";

import axios from "axios";
import { useQuery } from "react-query";
import { generateGraphCountryUrl } from "./urlGenerator";

export const useQueryGraph = (
  country: string,
  startDate?: string,
  endDate?: string
) => {
  const { data, refetch } = useQuery("graph", async () => {
    try {
      const result = await axios.get(
        generateGraphCountryUrl(country, startDate, endDate)
      );

      return result.data;
    } catch (err) {
      console.error(err);
    }
  });

  return { data, refetch };
};
