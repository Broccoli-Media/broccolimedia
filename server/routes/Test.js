import express from "express";
import { ServingMsg } from "../controllers/Test.js";

const router = express.Router();
router.get("/test", ServingMsg);

export default router;