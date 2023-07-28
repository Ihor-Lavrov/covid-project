import countriesList from "countries-list";

export const sanitizeData = (data: any) => {
  if (data) {
    const { _id, __v, ...sanitizedData } = data;
    return sanitizedData;
  }

  return [];
};

export const sanitizeCountries = (): string[] => {
  const allCountries: any = {
    ...countriesList.countries,
    ...countriesList.continents,
  };

  return Object.keys(allCountries)
    .filter((code: any) => code !== "AN")
    .map((code: any) => allCountries[code].name || allCountries[code]);
};
