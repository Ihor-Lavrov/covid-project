import { Autocomplete, FormLabel, Grid, TextField } from "@mui/material";
import React from "react";
import { Datepicker } from "../Datepicker";
import { DEFAULT_COUNTRY } from "../../consts";
import { Dayjs } from "dayjs";
import { useLocation } from "react-router";
import { Box } from "@mui/system";

export interface InputPanelProps {
  autocompleteOptions: string[];
  baseSelected: string | null;
  comparisionSelected: string | null;
  updateDate: (date: Dayjs | null) => void;
  updateStartDate: (date: Dayjs | null) => void;
  selectedDate: Dayjs | null;
  startDate: Dayjs | null;
  onAutoCompleteChange: (propertyName: string, value: string | null) => void;
}

export const InputPanel = ({
  autocompleteOptions,
  baseSelected,
  selectedDate,
  updateDate,
  updateStartDate,
  onAutoCompleteChange,
  comparisionSelected,
  startDate,
}: InputPanelProps) => {
  const location = useLocation();
  const secondDatePicker = location.pathname === "/graph";
  const comparisionRegion = location.pathname !== "/graph";
  return (
    <div data-testid="input-panel">
      <Autocomplete
        data-testid="base-region-autocomplete"
        options={autocompleteOptions}
        style={{ marginBottom: "16px" }}
        value={baseSelected || DEFAULT_COUNTRY}
        renderInput={(params) => (
          <TextField {...params} label="Select a region" variant="filled" />
        )}
        onChange={(event, newValue) => onAutoCompleteChange("base", newValue)}
        sx={{ width: 300 }}
      />
      {comparisionRegion && (
        <Autocomplete
          data-testid="comparision-region-autocomplete"
          options={autocompleteOptions}
          style={{ marginBottom: "16px" }}
          value={comparisionSelected || null}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select a comparision region"
              variant="filled"
            />
          )}
          onChange={(event, newValue) =>
            onAutoCompleteChange("comparision", newValue)
          }
          sx={{ width: 300 }}
        />
      )}
      <Grid container>
        {secondDatePicker && (
          <Box
            sx={{ display: "flex", alignItems: "center", marginRight: "16px" }}
          >
            <FormLabel>Track from: </FormLabel>
            <Datepicker selectedDate={startDate} onChange={updateStartDate} />
          </Box>
        )}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FormLabel>Track to: </FormLabel>
          <Datepicker selectedDate={selectedDate} onChange={updateDate} />
        </Box>
      </Grid>
    </div>
  );
};
