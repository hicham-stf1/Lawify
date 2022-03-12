import User from "../model/User.js";
import Avocat from "../model/Avocat.js";
import { StatusCodes } from "http-status-codes";

import { badRequestError, UnAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;
  if (!name || !email || !password || phoneNumber) {
    throw new badRequestError("Please provide all values");
  }

  const userAlreadyExists = await (Avocat.findOne({ email }) ||
    User.findOne({ email }));
  if (userAlreadyExists) {
    throw new badRequestError("Email already in use");
  }

  //try and cash should be implemented (but we use instead expr-async-err)
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      name: user.name,
      phoneNumber: user.phoneNumber,
    },
    token,
  });
};
const registerLawyer = async (req, res) => {
  const { name, email, password, phoneNumber, city } = req.body;
  if (!name || !email || !password || !phoneNumber || !city) {
    throw new badRequestError("Please provide all values");
  }

  const userAlreadyExists = await (Avocat.findOne({ email }) ||
    User.findOne({ email }));
  if (userAlreadyExists) {
    throw new badRequestError("Email already in use");
  }

  //try and cash should be implemented (but we use instead expr-async-err)
  const user = await Avocat.create({
    name,
    email,
    password,
    phoneNumber,
    city,
  });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      name: user.name,
      phoneNumber: user.phoneNumber,
      city: user.city,
    },
    token,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new badRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

const updateUser = async (req, res) => {
  res.send("update User .");
};

export { register, login, updateUser, registerLawyer };