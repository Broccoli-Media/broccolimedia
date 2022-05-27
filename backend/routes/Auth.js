import express from "express";
import { signin, register } from "../controllers/Auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/signin", signin);

export default router;