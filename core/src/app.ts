import express, { type Express, type Request, type Response } from "express";
import CookieParser from "cookie-parser";
import cors from "cors";
import { globalErrorHandler } from "./middlewares/globalErrorHandler.middleware";

const app: Express = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(CookieParser());

app.get("/", (_req: Request, res: Response) => {
  res.send("CollabCoder API is running");
});

app.get("/health", (_req: Request, res: Response) => {
  try {
    // Add DB, Redis or queu checks here
    res.status(200).json({
      status: "healthy",
      service: "api",
      uptime: process.uptime(),
      timeStamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(503).json({
      status: "unHealthy",
    });
  }
});

app.get("/config", (_req: Request, res: Response) => {
  // All env variables available here with full type safety
  res.json({
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
  });
});

// Importing Routes
import authRouter from "./routes/auth.routes";
import projectRouter from "./routes/project.routes";
import snapShotRouter from "./routes/snapshot.routes";

// Using Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/project", projectRouter);
app.use("/api/v1/snapshot", snapShotRouter);

app.use(globalErrorHandler);

export default app;
