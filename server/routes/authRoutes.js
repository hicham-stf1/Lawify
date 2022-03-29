import express from "express";
const router = express.Router();
import axios from "axios";
import authenticateUser from "../middleware/auth.js";

import {
  register,
  login,
  updateUser,
  registerLawyer,
} from "../controllers/authController.js";

router.route("/register").post(register);
router.route("/registerAvocat").post(registerLawyer);
router.route("/login").post(login);
// router.route("/updateUser").patch(updateUser);
router.route("/updateUser").patch(authenticateUser, updateUser);



export default router;
