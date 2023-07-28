import express from "express";
import { getWorldData } from "../controllers/worldController";

const router = express.Router();

router.get("/world", getWorldData);

export default router;
