import express from "express";
const router = express.Router();

import { updateUser, deleteUser, getUser, getUsers } from "../controllers/User.js";
import { verifyUser, verifyAdmin } from "../utils/VerifyTokens.js";

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers);

export default router;
