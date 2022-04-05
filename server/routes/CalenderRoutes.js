import express from 'express';
import RdvTime from "../model/RdvTime.js";


const router = express.Router();

router.get("/", (req, res) => {
    RdvTime.find({})
      .then((data) => {
        console.log("Data: ", data);
        res.json(data);
      })
      .catch((error) => {
        // console.log("error: ", error);
      });
  });

  router.post("/", (req, res) => {
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