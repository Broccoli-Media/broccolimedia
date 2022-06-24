import express from "express";
import { updateUser, deleteUser, getUsers, getUserByUsername, countByCity } from "../controllers/User.js";
import { verifyUser, verifyAdmin } from "../utils/VerifyTokens.js";

const router = express.Router();

router.get("/", getUsers);
// router.get("/:id", getUserById);
router.get("/countbycity", countByCity);
router.get("/:username", getUserByUsername);
router.put("/:username", verifyUser, updateUser);
router.delete("/:username", verifyAdmin, deleteUser);


export default router;
