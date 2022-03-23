import express from "express";
const app = express();

import morgan from "morgan";

import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

//db and authUser
import connectDB from "./db/connect.js";

// routers
import userRoutes from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";
import conversationRouter from "./routes/conversations.js";
import messageRouter from "./routes/messages.js";

//middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundModule from "./middleware/not-found.js";
import authenticateUser from "./middleware/auth.js";

// axios.get("https://fontawesome.com/v4/icons/", {
//   headers: {
//     "Access-Control-Allow-Origin": true,
//   },
// });

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());
console.log("Helloooo");

app.get("/", (req, res) => {
  res.json({ msg: "Welcome!" });
});

app.get("/api/v1", (req, res) => {
  res.status(200).json({ msg: "API" });
});

app.use("/api/v1/auth", authRouter);
// app.use("/api/v1/auth", authenticateUser, authRouter);
app.use("/api/v1/jobs", jobsRouter);
app.use("/api/users", userRoutes);
app.use("/api/v1/conversations", conversationRouter);
app.use("/api/v1/messages", messageRouter);

app.use(notFoundModule);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server is listening on port ${port}...`));

const start = async () => {
  try {
    //The server will run if the connection succeeded
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
