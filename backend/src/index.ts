import "dotenv/config";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import { config } from "./config/app.config";
import connectiondb from "./database/models/database";
import { errorHandler } from "./middlewares/errorHandlers";
import { HTTPSTATUS } from "./config/http.config";
import { asyncHandler } from "./middlewares/asynchandlers";

const app = express();
//const BASE_PATH = config.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: config.APP_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

app.get(
  "/",
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    res.status(HTTPSTATUS.OK).json({
      message: "This route is perfactly wo rking",
    });
  })
);
app.use(errorHandler);
app.listen(config.PORT, async () => {
  console.log(`app is listening in app address ${config.PORT}`);
  await connectiondb();
});
