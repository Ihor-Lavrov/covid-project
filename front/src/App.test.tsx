import React from "react";
import { RenderResult, render } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router";

jest.mock("react-query");

let queryClient: QueryClient;
let renderResult: RenderResult;

beforeEach(() => {
  queryClient = new QueryClient();
  renderResult = render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </QueryClientProvider>
  );
});

afterEach(() => {
  queryClient.clear();
  renderResult.unmount();
});

test("App component rendered correctly", () => {
  render(<App />);
});
