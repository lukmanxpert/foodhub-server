import express, { Application } from "express";
import cors from "cors";
import { config } from "dotenv";

config();

const port = process.env.PORT || 5000;
console.log("port", port);

const app: Application = express();

app.use(
  cors({
    origin: process.env.APP_URL,
  }),
);


export default app;
