import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { Graph } from "./Graph";
import { useQueryGraph } from "../../utils";
import * as graphHooks from "../../utils/queryGraphData";
import * as worldHooks from "../../utils/queryWorld";

jest.mock("../TagAutocomplete", () => ({
  TagAutocomplete: jest.fn(() => (
    <div data-testid="tag-autocomplete">TagAutocomplete</div>
  )),
}));

jest.mock("./components/LinearGraph/LinearGraph", () => ({
  Linear: jest.fn(() => <div data-testid="linear-graph">Linear Graph</div>),
}));

jest.mock("./components/BarGraph/BarGraph", () => ({
  BarGraph: jest.fn(() => <div data-testid="bar-graph">Bar Graph</div>),
}));

jest.mock("./components/WorldMapGraph/WorldMapGraph", () => ({
  WorldMapGraph: jest.fn(() => (
    <div data-testid="world-map-graph">World Map Graph</div>
  )),
}));

const worldDataRefetch = jest.fn();

beforeEach(() => {
  jest.spyOn(graphHooks, "useQueryGraph").mockImplementation(() => ({
    data: { location: "Canada", population: 1000 },
    refetch: jest.fn(),
  }));
  jest.spyOn(worldHooks, "useQueryWorld").mockImplementation(() => ({
    data: { location: "Canada", population: 1000 },
    refetch: worldDataRefetch,
  }));
});

test("renders CircularProgress when data is not available", () => {
  jest.spyOn(graphHooks, "useQueryGraph").mockImplementation(() => ({
    data: null,
    refetch: jest.fn(),
  }));

  render(<Graph selectedCountry="Canada" />);
  const circularProgressElement = screen.getByTestId("progress-bar");
  expect(circularProgressElement).toBeInTheDocument();
});

test("renders TagAutocomplete when graph type is not 'worldMap'", () => {
  render(<Graph selectedCountry="Canada" />);
  const tagAutocompleteElement = screen.getByTestId("tag-autocomplete");
  expect(tagAutocompleteElement).toBeInTheDocument();
});

test("renders Select when graph type is 'worldMap'", () => {
  render(<Graph selectedCountry="Canada" />);
  fireEvent.mouseDown(screen.getByRole("button"));
  const listbox = within(screen.getByRole("listbox"));
  fireEvent.click(listbox.getByText("World map"));

  const selectElement = screen.getByTestId("single-select");
  expect(selectElement).toBeInTheDocument();
});

test("renders LinearGraph component when graph type is 'linear' in default", () => {
  render(<Graph selectedCountry="Canada" />);
  const linearGraphElement = screen.getByTestId("linear-graph");
  expect(linearGraphElement).toBeInTheDocument();
});

test("renders BarGraph component when graph type is 'bar'", () => {
  render(<Graph selectedCountry="Canada" />);

  fireEvent.mouseDown(screen.getByRole("button"));
  const listbox = within(screen.getByRole("listbox"));
  fireEvent.click(listbox.getByText("Bar"));
  const barGraphElement = screen.getByTestId("bar-graph");

  expect(barGraphElement).toBeInTheDocument();
});

test("renders WorldMapGraph component when graph type is 'worldMap'", () => {
  render(<Graph selectedCountry="Canada" />);

  fireEvent.mouseDown(screen.getByRole("button"));
  const listbox = within(screen.getByRole("listbox"));
  fireEvent.click(listbox.getByText("World map"));
  const barGraphElement = screen.getByTestId("world-map-graph");

  expect(barGraphElement).toBeInTheDocument();
});

test("renders Select when graph type is 'worldMap12121'", () => {
  render(<Graph selectedCountry="Canada" />);

  fireEvent.mouseDown(screen.getByRole("button"));
  const listbox = within(screen.getByRole("listbox"));
  fireEvent.click(listbox.getByText("World map"));

  const graphTypeSelect = screen.getByTestId("single-select");

  fireEvent.mouseDown(within(graphTypeSelect).getByRole("button"));
  const listboxx = within(screen.getByRole("listbox"));
  fireEvent.click(listboxx.getByTestId("total_cases"));

  expect(graphTypeSelect).toHaveTextContent("Total CasesData set");
});
