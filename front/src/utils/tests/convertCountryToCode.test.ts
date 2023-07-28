import { convertCountryNameToCode } from "../convertCountryToCode";
import countryList from "country-list";

test("convertCountryNameToCode method returns appropriate country code", () => {
  const getCodeMock = jest.spyOn(countryList, "getCode");
  getCodeMock.mockReturnValueOnce("US");
  const result = convertCountryNameToCode("United States");

  expect(result).toBe("US");
});

test("convertCountryNameToCode method returns appropriate country code for russia", () => {
  const getCodeMock = jest.spyOn(countryList, "getCode");
  getCodeMock.mockReturnValueOnce("RU");

  const result = convertCountryNameToCode("Russia");

  expect(result).toBe("RU");
});
