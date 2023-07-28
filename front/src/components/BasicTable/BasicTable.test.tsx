import React from "react";
import { render, screen } from "@testing-library/react";
import { BasicTable, BasicTableProps } from "./BasicTable";
import { CountryData } from "../../types";
import { generateHeader } from "../../utils/generateTableHeader";

const testData: Partial<CountryData>[] = [
  { location: "Location_1", population: 1000, total_cases: 2000 },
  { location: "Location_2", population: 1500, total_cases: 2500 },
];

const renderComponent = (props: BasicTableProps) => {
  return render(<BasicTable {...props} />);
};

test("BasicTable renders table headers correctly", () => {
  renderComponent({ data: testData });

  expect(screen.getAllByText("Location_1").length).toBe(2);
  expect(screen.getAllByText("Location_2").length).toBe(2);
});

test("BasicTable renders table data correctly", () => {
  renderComponent({ data: testData });

  expect(screen.getByText("1000")).toBeInTheDocument();
  expect(screen.getByText("2000")).toBeInTheDocument();

  expect(screen.getByText("1500")).toBeInTheDocument();
  expect(screen.getByText("2500")).toBeInTheDocument();
});

test("BasicTable generates correct table header", () => {
  // Test the generateHeader function with specific data
  expect(generateHeader("population")).toBe("Population");
  expect(generateHeader("area")).toBe("Area");
  // Add more test cases as needed for other headers
});
