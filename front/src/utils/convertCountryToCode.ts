import countryList from "country-list";

export const convertCountryNameToCode = (countryName = "Canada") => {
  let validateCountryName = null;
  if (countryName === "United States") {
    validateCountryName = "United States of America";
  }

  if (countryName === "Russia") {
    validateCountryName = "Russian Federation";
  }

  const countryCode = countryList.getCode(validateCountryName || countryName);
  return countryCode;
};
