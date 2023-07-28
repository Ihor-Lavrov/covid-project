import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import dayjs from "dayjs";
import { Datepicker } from "./Datepicker";
import { QueryClientProvider } from "react-query";

test("Datepicker should be rendered with the provided selected date", () => {
  const selectedDate = dayjs("2022-01-15");

  render(<Datepicker selectedDate={selectedDate} onChange={() => {}} />);

  expect(screen.getByDisplayValue("01/15/2022")).toBeInTheDocument();
});
