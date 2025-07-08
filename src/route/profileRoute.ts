import express from "express";
import { db } from "../db";
import { profiles } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import {
  createProfile,
  deleteProfile,
  getProfile,
  updateProfile,
} from "../controller/profileController";

const router = express.Router();

router.post("/", createProfile);
router.get("/", getProfile);
router.put("/:id", updateProfile);
router.delete("/:id", deleteProfile);

export default router;
