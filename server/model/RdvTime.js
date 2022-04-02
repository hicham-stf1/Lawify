import mongoose from "mongoose";

const RdvTimeSchema = mongoose.Schema({
  startTime: {
    type: String,
    required: [true, "Please provide startTime"],
  },
  endTime: {
    type: String,
    required: [true, "Please provide endTime"],
  },
  // day: {
  //   type: Number,
  //   required: [true, "Please provide day "],
  // },
  // month: {
  //   type: Number,
  //   required: [true, "Please provide user"],
  //   enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  //   default: "1",
  // },
  // year: {
  //   type: Number,
  //   required: [true, "Please provide Year"],
  //   enum: [2022, 2023, 2024, 2025],
  //   default: "2022",
  // },
  // confirmed: { type: Boolean, default: false },

  date: {
    type: String,
    // default: Date.now(),
    required: [true, "Please provide Year"],
  },
  createdBy: {
    type: String,
    required: true,
  },
});

const RDVTime = mongoose.model("RdvTime", RdvTimeSchema);

export default RDVTime;
