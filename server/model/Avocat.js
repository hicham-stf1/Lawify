import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const AvocatShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a validate email",
    },
    unique: true,
  },
  password: {
    select: false,
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  phoneNumber: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "0616202020",
  },
  city: {
    type: String,
    enum: ["interview", "declined", "pending"],
    default: "pending",
  },
  role: {
    type: String,
    default: "Avocat",
  },
  //   jobType: {
  //     type: String,
  //     enum: ["full-time", "part-time", "remote", "internship"],
  //     default: "full-time",
  //   },
});

AvocatShema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

AvocatShema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};
AvocatShema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("Avocat", AvocatShema);
