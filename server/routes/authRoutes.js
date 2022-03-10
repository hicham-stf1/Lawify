import express from "express";
const router = express.Router();

import {
  register,
  login,
  updateUser,
  registerLawyer,
} from "../controllers/authController.js";

router.route("/register").post(register);
router.route("/registerAvocat").post(registerLawyer);
router.route("/login").post(login);
router.route("/updateUser").patch(updateUser);

export default router;
