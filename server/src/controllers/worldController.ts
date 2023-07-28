import { Request, Response } from "express";
import { RawData } from "../models/rawDataModel";

export const getWorldData = async (req: Request, res: Response) => {
  try {
    const { date } = req.query;
    const records = await RawData.find({ data: { $elemMatch: { date } } });
    const resultArray = records.map((record: any) => {
      const data = record.data.find((item: any) => item.date === date);
      return {
        location: record.location,
        ...data,
      };
    });
    res.send(resultArray);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
