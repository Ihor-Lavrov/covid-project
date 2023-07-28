import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CountryData, DataSetDTO } from "../../../../types";

interface LinearProps {
  graphData: Partial<CountryData>[];
  selectedDataSets: DataSetDTO[];
}

export const Linear = ({ graphData, selectedDataSets }: LinearProps) => {
  return (
    <ResponsiveContainer width="95%" height={600}>
      <LineChart data={graphData}>
        {selectedDataSets.map((dataSet: DataSetDTO) => (
          <Line
            type="monotone"
            dataKey={dataSet.value}
            stroke={dataSet.colors.primary}
            key={dataSet.value}
          />
        ))}
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" tick={{ fontSize: "10px" }} />
        <YAxis tick={{ fontSize: "10px" }} />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
