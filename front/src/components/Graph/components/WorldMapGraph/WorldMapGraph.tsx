import React from "react";
import WorldMap from "react-svg-worldmap";
import { Grid } from "@mui/material";
import { convertCountryNameToCode } from "../../../../utils/convertCountryToCode";
import { DataSetDTO } from "../../../../types";

interface WorldMapGraphProps {
  graphData: any;
  selectedDataSet: DataSetDTO;
}

export const WorldMapGraph = ({
  graphData,
  selectedDataSet,
}: WorldMapGraphProps) => {
  if (!graphData) {
    return null;
  }

  const data = graphData
    .map((dataItem: any) => {
      return {
        country: convertCountryNameToCode(dataItem.location),
        value: dataItem[selectedDataSet.value],
      };
    })
    .filter((record: any) => !!record.country);

  return (
    <Grid container justifyContent="center" data-testid="world-map">
      <WorldMap
        color="#4CAF50"
        value-suffix={selectedDataSet.name}
        size="xl"
        data={data}
        tooltipBgColor="green"
      />
    </Grid>
  );
};
