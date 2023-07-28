import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CountryData, DataSetDTO } from "../../../../types";
interface BarProps {
  graphData: Partial<CountryData>[];
  selectedDataSets: DataSetDTO[];
}

export const BarGraph = ({ graphData, selectedDataSets }: BarProps) => {
  return (
    <ResponsiveContainer width="95%" height={600}>
      <BarChart width={730} height={250} data={graphData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tick={{ fontSize: "10px" }} dataKey="date" />
        <YAxis tick={{ fontSize: "10px" }} />
        <Tooltip />
        <Legend />
        {selectedDataSets.map((dataSet: DataSetDTO) => {
          return (
            <Bar
              key={dataSet.value}
              dataKey={dataSet.value}
              stroke={dataSet.colors.primary}
            />
          );
        })}
      </BarChart>
    </ResponsiveContainer>
  );
};
