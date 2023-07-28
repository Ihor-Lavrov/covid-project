import { sanitizeCountries, sanitizeData } from "../sanitizers";

test("sanitizeData method should return empty array if no data passed", () => {
  const result = sanitizeData("");

  expect(result.length).toBe(0);
});

test("sanitizeData method should return empty array if no data passed", () => {
  const result = sanitizeData({
    _id: "test",
    __v: "v",
    otherData: "otherData",
  });

  expect(result).toStrictEqual({ otherData: "otherData" });
});

test("sanitizeCountries method should return an array of all countries and continents", () => {
  const result = sanitizeCountries();

  expect(result.length).toBe(252);
  expect(result.find((region) => region === "France")).toBe("France");
});
