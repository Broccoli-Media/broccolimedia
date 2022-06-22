import express from "express";
const router = express.Router();

import { updateUser, deleteUser, getUserById, getUsers, getUserByUsername } from "../controllers/User.js";
import { verifyUser, verifyAdmin } from "../utils/VerifyTokens.js";

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyAdmin, deleteUser);

router.get("/:username", getUserByUsername);
router.get("/:id", getUserById);
router.get("/", getUsers);

export default router;
