import express from "express";
const router = express.Router();

import { createJob } from "../controllers/jobsController.js";

// router.route("/").post(createJob).get(getAllJobs);
router.route("/").post(createJob);

export default router;
