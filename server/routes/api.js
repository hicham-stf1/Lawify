import { Router } from "express";
import TheTime from "../model/Time.js";
const router = Router();

// Routes
router.get("/", (req, res) => {
  TheTime.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      // console.log("error: ", error);
    });
});
router.get("/:createdBy", (req, res) => {
  TheTime.find({ createdBy: req.params.createdBy })
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      // console.log("error: ", error);
    });
});

router.post("/save", (req, res) => {
  const data = req.body;

  const newBlogPost = new TheTime(data);

  newBlogPost.save((error) => {
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

router.get("/name", (req, res) => {
  const data = {
    username: "peterson",
    age: 5,
  };
  res.json(data);
});

router.delete("/:id", async (req, res) => {
  await TheTime.findByIdAndDelete(req.params.id);
});

export default router;
