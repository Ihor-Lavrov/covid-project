import mongoose from "mongoose";

interface RawDataDocument extends Document {
  data?: Array<any>;
  $isNew?: boolean;
  _doc?: any;
}

const rawDataSchema = new mongoose.Schema({}, { strict: false });

export const RawData = mongoose.model<RawDataDocument>(
  "country-stats",
  rawDataSchema
);
