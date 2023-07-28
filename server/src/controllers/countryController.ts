import { Request, Response } from "express";
import { filterDataByDateRange } from "../utils/dateUtils";
import { RawData } from "../models/rawDataModel";

export const getCountryData = async (req: Request, res: Response) => {
  try {
    const { country, date } = req.query;
    const result = await RawData.findOne({ location: country });
    const requestedDate = result?.data?.find((data: any) => data.date === date);
    const resultedObject: any = result?.toObject();

    if (resultedObject?.data) {
      const { data, ...rest } = resultedObject;
      res.send({ ...rest, ...requestedDate });
    } else {
      res.send({ ...resultedObject, ...requestedDate });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export const getCountryGraphData = async (req: Request, res: Response) => {
  try {
    const { country, from, to } = req.query;
    const result = await RawData.findOne({ location: country });
    const filteredData = result?.data
      ? filterDataByDateRange(result.data, from as string, to as string)
      : [];
    res.send({ ...result?.toObject(), data: filteredData });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
