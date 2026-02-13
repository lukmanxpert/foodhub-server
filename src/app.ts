import express, { Application } from "express";
import cors from "cors";
import { config } from "dotenv";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { notFount } from "./middlewares/notFound";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { authRouter } from "./modules/auth/auth.route";
import { providerRouter } from "./modules/provider/provider.route";
import { adminRouter } from "./modules/admin/admin.route";
import { mealRouter } from "./modules/meal/meal.route";

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

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/provider", providerRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/meal", mealRouter);

app.use(globalErrorHandler);

app.use(notFount);

export default app;
