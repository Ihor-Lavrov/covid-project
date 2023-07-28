import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableHeader } from "./styles";
import { CountryData } from "../../types";
import { generateHeader } from "../../utils/generateTableHeader";

export interface BasicTableProps {
  data: Partial<CountryData>[];
}

export const BasicTable = ({ data }: BasicTableProps) => {
  const tableHeaders = Object.keys(data[0]);
  console.log(data);
  return (
    <TableContainer component={Paper} data-testid="table">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell key="default"></TableCell>
            {data.map(
              (entity: Partial<CountryData>, index: number) =>
                entity && (
                  <TableCell key={index}>
                    <TableHeader>{entity?.location}</TableHeader>
                  </TableCell>
                )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableHeaders.map((header, index) => (
            <TableRow key={index}>
              <TableCell style={{ width: "15%" }}>
                <TableHeader>{generateHeader(header)}</TableHeader>
              </TableCell>
              {data.map((entity: Partial<CountryData>, index: number) => {
                console.log(entity, header);
                return (
                  <TableCell key={index}>
                    {entity[header as keyof CountryData]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
