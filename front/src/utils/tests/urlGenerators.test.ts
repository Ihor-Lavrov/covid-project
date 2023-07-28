import {
  generateBaseCountryUrl,
  generateGraphCountryUrl,
  generateWorldUrl,
} from "../urlGenerator";

test("generateBaseCountryUrl method should return url string", () => {
  const result = generateBaseCountryUrl("Canada", "03/03/2023");

  expect(result).toBe(
    "http://localhost:3001/country?country=Canada&date=03/03/2023"
  );
});

test("generateGraphCountryUrl method should return url string", () => {
  const result = generateGraphCountryUrl("Canada", "03/03/2023");

  expect(result).toBe(
    "http://localhost:3001/country/graph?country=Canada&from=03/03/2023&to=undefined"
  );
});

test("generateWorldUrl method should return url string", () => {
  const result = generateWorldUrl("Canada", "03/03/2023");

  expect(result).toBe(
    "http://localhost:3001/world?country=Canada&date=03/03/2023"
  );
});
