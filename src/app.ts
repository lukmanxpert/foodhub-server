import express, { Application } from "express";
import cors from "cors";
import { config } from "dotenv";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { notFount } from "./middlewares/notFound";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";

config();

const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.APP_URL,
    credentials: true,
  }),
);

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.get("/", (req, res) => {
  res.send("Hello World.");
});

app.use(notFount);

app.use(globalErrorHandler);

export default app;
