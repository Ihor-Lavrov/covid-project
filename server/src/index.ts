import express from "express";
import { CONNECTION_STRING, JSON_URL, PORT } from "./config/constants";
import axios from "axios";
import mongoose, { Document, Schema, mongo } from "mongoose";
import cors from "cors";
import { RawData } from "./models/rawDataModel";
import countryRoutes from "./routes/countryRoutes";
import worldRoutes from "./routes/worldRoutes";

const app = express();

mongoose.connect(CONNECTION_STRING).catch((err) => console.log("err", err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection errror:"));
db.dropCollection("country-stats");

const initialSetup = async () => {
  const jsonData = (await axios.get(JSON_URL)).data;

  for (const [key, value] of Object.entries(jsonData)) {
    const data = new RawData(value);
    await data.save();
  }
};

initialSetup();

app.use(cors());
app.get("/", async (req, res, next) => {
  next();
});
app.use("/", countryRoutes);
app.use("/", worldRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
