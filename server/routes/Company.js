import express from "express";
const router = express.Router();

import { createCompany, deleteCompany, getCompany, getCompanies, updateCompany } from "../controllers/Company.js";
import { verifyAdmin } from "../utils/VerifyTokens.js";

router.post("/:id", verifyAdmin, createCompany);
router.put("/:id", verifyAdmin, updateCompany);
router.delete("/:id", verifyAdmin, deleteCompany);
router.get("/:id", getCompany);
router.get("/", getCompanies);

export default router;
