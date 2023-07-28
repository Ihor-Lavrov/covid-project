import React, { useEffect, useState } from "react";
import { Graph } from "../Graph/Graph";
import { BasicTable } from "../BasicTable/BasicTable";
import CircularProgress from "@mui/material/CircularProgress";
import { useQueryCountry } from "../../utils/queryCountry";
import { DEFAULT_COUNTRY } from "../../consts";
import { sanitizeCountries, sanitizeData } from "../../utils";
import dayjs, { Dayjs } from "dayjs";
import { InputPanel } from "../InputPanel";
import { Box, Grid, Typography } from "@mui/material";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const Dashboard = () => {
  const [baseSelected, setBaseSelected] = useState<string | null>(null);
  const [comparisionSelected, setComparisionSelected] = useState<string | null>(
    null
  );

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    dayjs("2022-06-23")
  );
  const [selectedStartDate, setSelectedStartDate] = useState<Dayjs | null>(
    dayjs("2020-01-03")
  );

  const { data: baseData, refetch: baseRefetch } = useQueryCountry(
    baseSelected || DEFAULT_COUNTRY,
    selectedDate?.format("YYYY-MM-DD").toString()
  );

  const { data: comparisionData, refetch: comparisionRefetch } =
    useQueryCountry(
      comparisionSelected || "",
      selectedDate?.format("YYYY-MM-DD").toString(),
      !!comparisionSelected
    );

  const autocompleteOptions: string[] = sanitizeCountries();

  useEffect(() => {
    baseRefetch();
  }, [baseSelected, selectedDate, baseRefetch]);

  useEffect(() => {
    comparisionRefetch();
  }, [comparisionSelected, selectedDate, comparisionRefetch]);

  if (!baseData) {
    return (
      <Grid
        data-testid="progress-bar"
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  const updateDate = (value: Dayjs | null) => setSelectedDate(value);
  const updateStartDate = (value: Dayjs | null) => setSelectedStartDate(value);

  const onAutoCompleteChange = (propertyName: string, value: string | null) => {
    if (propertyName === "base") {
      setBaseSelected(value);
    } else {
      setComparisionSelected(value);
    }
  };

  return (
    <div data-testid="dashboard">
      <Typography>Choose comparision region </Typography>
      <InputPanel
        autocompleteOptions={autocompleteOptions}
        baseSelected={baseSelected}
        comparisionSelected={comparisionSelected}
        updateDate={updateDate}
        updateStartDate={updateStartDate}
        selectedDate={selectedDate}
        startDate={selectedStartDate}
        onAutoCompleteChange={onAutoCompleteChange}
      />
      <Box style={{ margin: "16px 0" }}>
        <Button variant="outlined" component={Link} to={"/"}>
          Table
        </Button>
        <Button variant="outlined" component={Link} to={"/graph"}>
          Graph
        </Button>
      </Box>

      <Routes>
        <Route
          path="/"
          element={
            <BasicTable
              data={[sanitizeData(baseData), sanitizeData(comparisionData)]}
            />
          }
        />
        <Route
          path="/graph"
          element={
            <Graph
              startDate={selectedStartDate?.format("YYYY-MM-DD").toString()}
              endDate={selectedDate?.format("YYYY-MM-DD").toString()}
              selectedCountry={baseSelected}
            />
          }
        />
      </Routes>
    </div>
  );
};
