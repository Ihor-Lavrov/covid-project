import React from "react";
import { render, screen } from "@testing-library/react";
import { WorldMapGraph } from "./WorldMapGraph";

const graphData = [
  { location: "Brazil", total_cases: 200 },
  { location: "Canada", total_cases: 100 },
];

const selectedDataSet = {
  name: "Total Cases",
  value: "total_cases",
  colors: {
    primary: "#57a4a4",
    secondary: "#ae3ba1",
  },
};

test("renders the WorldMap with correct data", () => {
  render(
    <WorldMapGraph graphData={graphData} selectedDataSet={selectedDataSet} />
  );

  const mockedWorldMap = screen.getByTestId("world-map");

  expect(mockedWorldMap).toBeInTheDocument();
});

test("does not render the WorldMap when graphData is null", () => {
  render(<WorldMapGraph graphData={null} selectedDataSet={selectedDataSet} />);

  const mockedWorldMap = screen.queryByTestId("world-map");

  expect(mockedWorldMap).toBeNull();
});
