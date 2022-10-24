import express, { Response, Request } from "express";
import mongoose from "mongoose";
import { router } from "./routes/routes";

const app = express();

app.use(express.json());

app.use(router);

const Startup = async () => {
  try {
    await mongoose.connect(
      "mongodb://birdsquawk-mongo-service:27017/birdsquawk"
    );
    console.log("mongo connected");
  } catch (error) {
    console.log("Ошибка", error);
  }

  app.listen(5000, () =>
    console.log(`birdsquawk server start on port ${5000}`)
  );
};

Startup();
