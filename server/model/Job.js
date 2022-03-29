import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    startTime: {
      type: String,
      required: [true, "Please provide startTime"],
      maxlength: 50,
    },
    endTime: {
      type: String,
      required: [true, "Please provide endTime"],
      maxlength: 100,
    },
    day: {
      type: String,
      enum: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
      default: "full-time",
    },
    // createdBy: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    //   required: [true, "Please provide user"],
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
