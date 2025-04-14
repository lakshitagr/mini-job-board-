import express from "express";
const router = express.Router();
import {
  getAllJobs,
  getJobById,
  createJob
} from "../controllers/jobController.js";

router.get("/", getAllJobs);
router.get("/:id", getJobById);
router.post("/", createJob);

export default router;
