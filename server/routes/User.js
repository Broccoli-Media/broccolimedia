import express from "express";
import { updateUser, deleteUser, getNormalUsers, getAdminUsers, getUserByUsername, countByCity } from "../controllers/User.js";
import { verifyUser, verifyAdmin } from "../utils/VerifyTokens.js";

const router = express.Router();

router.get("/allnormal", getNormalUsers);
router.get("/alladmin", getAdminUsers);
// router.get("/:id", getUserById);
router.get("/countbycity", countByCity);
router.get("/", getUserByUsername);
router.put("/:username", verifyUser, updateUser);
router.delete("/:username", verifyAdmin, deleteUser);


export default router;
