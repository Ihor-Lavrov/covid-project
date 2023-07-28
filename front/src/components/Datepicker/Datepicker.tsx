import React from "react";
import dayjs, { Dayjs } from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MAX_DATA_DAY } from "../../consts";

export interface DatpickerProps {
  selectedDate: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
}
export const Datepicker = ({ selectedDate, onChange }: DatpickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={selectedDate}
        onChange={onChange}
        maxDate={dayjs(MAX_DATA_DAY)}
      />
    </LocalizationProvider>
  );
};
