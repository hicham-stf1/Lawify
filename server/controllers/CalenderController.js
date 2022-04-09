import { Router } from "express";
const router = Router();
import RdvTime from "../model/RdvTime.js";
import moment from "moment";
import Avocat from "../model/Avocat.js";

router.get("/calender", (req, res) => {
  RdvTime.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      // console.log("error: ", error);
    });
});

router.get("/avocat", (req, res) => {
  const { city, speciality } = req.query;
  Avocat.find({ city, speciality })
    .then((data) => {
      // console.log("Avocats: ", data);
      res.json(data);
    })
    .catch((error) => {
      // console.log("error: ", error);
    });
});

router.get("/avocats", (req, res) => {
  Avocat.find({})
    .then((data) => {
      // console.log("Avocats: ", data);
      res.json(data);
    })
    .catch((error) => {
      // console.log("error: ", error);
    });
});
router.get("/avoca/:_id", (req, res) => {
  Avocat.find({ _id: req.params._id })
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.patch("/avoca/:id", (req, res) => {
  Avocat.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { Status: "Confirmed" } },
    { new: true },
    function (err, doc) {
      if (err) {
        console.log("Something wrong when updating data!");
      }
      console.log(doc);
    }
  );
});

router.post("/calender/save", (req, res) => {
  const data = req.body;

  const newRdvTime = new RdvTime(data);

  newRdvTime.save((error) => {
    if (error) {
      res
        .status(500)
        .json({ msg: "Sorry, internal server errors", data: data });
      console.log(data);
      return;
    }
    // BlogPost
    return res.json({
      msg: "Your data has been saved!!!!!!",
      data,
    });
  });
});

export default router;
