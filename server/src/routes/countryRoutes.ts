import express from "express";
import {
  getCountryData,
  getCountryGraphData,
} from "../controllers/countryController";

const router = express.Router();

router.get("/country", getCountryData);
router.get("/country/graph", getCountryGraphData);

export default router;
