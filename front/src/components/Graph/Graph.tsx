import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useQueryGraph } from "../../utils";
import { DEFAULT_COUNTRY, graphTypeOptions, unitedDataSet } from "../../consts";
import { CircularProgress, Grid } from "@mui/material";
import { DataSetDTO, GraphType, GraphTypes } from "../../types";
import { TagAutocomplete } from "../TagAutocomplete";
import { Linear } from "./components/LinearGraph/LinearGraph";
import { BarGraph } from "./components/BarGraph/BarGraph";
import { WorldMapGraph } from "./components/WorldMapGraph/WorldMapGraph";
import { useQueryWorld } from "../../utils/queryWorld";

interface GraphProps {
  selectedCountry: string | null;
  startDate?: string;
  endDate?: string;
}

export const Graph = ({ selectedCountry, startDate, endDate }: GraphProps) => {
  const [selectedDataSets, setSelectedDataSets] = useState<DataSetDTO[]>([
    unitedDataSet[0],
  ]);
  const [selectedGraphType, setSelectedGraphType] =
    useState<GraphTypes>("linear");

  const { data, refetch } = useQueryGraph(
    selectedCountry || DEFAULT_COUNTRY,
    startDate,
    endDate
  );

  const { data: worldData, refetch: worldDataRefetch } = useQueryWorld(
    selectedCountry || DEFAULT_COUNTRY,
    endDate
  );

  useEffect(() => {
    worldDataRefetch();
  }, [worldDataRefetch, selectedDataSets, endDate]);

  useEffect(() => {
    refetch();
  }, [startDate, endDate, refetch]);

  if (!data) {
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

  const graphData = data.data;

  const onAutoCompleteChange = (selectedDataSets: DataSetDTO[]) => {
    setSelectedDataSets(selectedDataSets);
  };

  const onDataSetChange = (event: SelectChangeEvent<string>) => {
    setSelectedDataSets([
      unitedDataSet.find(
        (dataSet: DataSetDTO) => dataSet.value === event.target.value
      ),
    ] as DataSetDTO[]);
  };

  const onChangeGraphType = (event: SelectChangeEvent<GraphTypes>) => {
    setSelectedGraphType(event.target.value as unknown as GraphTypes);
  };

  const multiChoise = selectedGraphType !== "worldMap";

  return (
    <div data-testid="graph">
      {multiChoise ? (
        <FormControl fullWidth>
          <TagAutocomplete
            data={unitedDataSet}
            onChange={onAutoCompleteChange}
          />
        </FormControl>
      ) : (
        <FormControl fullWidth>
          <InputLabel id="single-data-set">Data set</InputLabel>
          <Select
            data-testid="single-select"
            labelId="single-data-set"
            value={selectedDataSets[0].value as string}
            label="Data set"
            onChange={onDataSetChange}
          >
            {unitedDataSet.map((dataSet: DataSetDTO) => (
              <MenuItem
                data-testid={dataSet.value}
                key={dataSet.value}
                value={dataSet.value}
              >
                {dataSet.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      <FormControl fullWidth style={{ marginTop: "16px" }}>
        <InputLabel id="simple-select-label">Graph type</InputLabel>
        <Select
          labelId="simple-select-label"
          data-testid="graph-type-select"
          id="graph-type-select"
          value={selectedGraphType}
          label="Graph type"
          onChange={onChangeGraphType}
        >
          {graphTypeOptions.map((graphType: GraphType) => (
            <MenuItem key={graphType.value} value={graphType.value}>
              {graphType.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedGraphType === "linear" && (
        <Linear selectedDataSets={selectedDataSets} graphData={graphData} />
      )}
      {selectedGraphType === "bar" && (
        <BarGraph selectedDataSets={selectedDataSets} graphData={graphData} />
      )}

      {selectedGraphType === "worldMap" && (
        <WorldMapGraph
          selectedDataSet={selectedDataSets[0]}
          graphData={worldData}
        />
      )}
    </div>
  );
};
