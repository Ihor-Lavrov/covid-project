import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Dashboard } from "./Dashboard";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import * as hooks from "../../utils/queryCountry";

jest.mock("../Graph/Graph", () => {
  return {
    Graph: () => <div data-testid="mocked-graph">Mocked Graph</div>,
  };
});

jest.mock("../BasicTable/BasicTable", () => {
  return {
    BasicTable: () => (
      <div data-testid="mocked-basic-table">Mocked BasicTable</div>
    ),
  };
});

jest.mock("../InputPanel/InputPanel", () => {
  return {
    InputPanel: () => <div data-testid="input-panel">Mocked BasicTable</div>,
  };
});

const renderComponent = () => {
  return render(
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
};

beforeEach(() => {
  jest.spyOn(hooks, "useQueryCountry").mockImplementation(() => ({
    data: { location: "Canada", population: 1000 },
    refetch: jest.fn(),
  }));
});

test("renders the Dashboard component", () => {
  renderComponent();

  expect(screen.getByTestId("dashboard")).toBeInTheDocument();

  expect(screen.getByText("Choose comparision region")).toBeInTheDocument();
});

// test("should call onAutoCompleteChange with correct parameters when base is selected", () => {
//   renderComponent();
//   mockUseQueryCountry
//     .mockReturnValueOnce({ data: mockedBaseData, refetch: jest.fn() })
//     .mockReturnValueOnce({ data: mockedComparisionData, refetch: jest.fn() });
//   const baseInput = screen.getByTestId("mock-input");
//   const comparisonInput = screen.getByTestId("mock-comparison-input");

//   // Simulate selecting options
//   fireEvent.click(baseInput);
//   //   fireEvent.change(comparisonInput, { target: { value: "Country B" } });

//   // Check if the state is updated correctly
//   expect(screen.getByTestId("dashboard")).toBeInTheDocument();
//   expect(screen.getByTestId("dashboard")).toHaveTextContent("Country A");
// });

test("displays a progress bar while fetching data", () => {
  jest
    .spyOn(hooks, "useQueryCountry")
    .mockImplementation(() => ({ data: undefined, refetch: jest.fn() }));

  render(<Dashboard />);

  expect(screen.getByTestId("progress-bar")).toBeInTheDocument();
});

test("navigates to Table and Graph views", async () => {
  renderComponent();

  const tableButton = screen.getByText("Table");
  const graphButton = screen.getByText("Graph");

  expect(tableButton).toBeInTheDocument();
  expect(graphButton).toBeInTheDocument();

  fireEvent.click(graphButton);

  expect(await screen.findByTestId("mocked-graph")).toBeInTheDocument();

  fireEvent.click(tableButton);

  expect(await screen.findByTestId("mocked-basic-table")).toBeInTheDocument();
});
