import axios from "axios";
import { useQuery } from "react-query";
import { generateWorldUrl } from "./urlGenerator";

export const useQueryWorld = (
  country: string,
  date?: string | undefined,
  enabled = true
) => {
  const { data, refetch } = useQuery(
    "world",
    async () => {
      try {
        const result = await axios.get(generateWorldUrl(country, date));

        return result.data;
      } catch (err) {
        console.error(err);
      }
    },
    { enabled }
  );

  return { data, refetch };
};
