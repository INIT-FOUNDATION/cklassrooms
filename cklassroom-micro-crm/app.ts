import express, {Express, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import routes from "./startup/routes";
import * as CONSTANT from './constants/CONST';
import { logger } from "cklasroom-micro-common";


dotenv.config();

const app: Express = express();

const resolveCrossDomain = function (req: Request, res: Response, next: NextFunction): void {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    CONSTANT.allowed_headers
  );
  res.header("Access-Control-Expose-Headers", "Version");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Strict-Transport-Security", "max-age=15552000");
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
};

// Set appVersion number to Header
const setAppVersiontoHeader = async function (req: Request, res: Response, next: NextFunction): Promise<void> {
  next();
};

app.use(fileUpload());
app.set("view engine", "ejs");
app.use(helmet());
app.use(resolveCrossDomain, setAppVersiontoHeader);

app.use(function applyXFrame(req: Request, res: Response, next: NextFunction) {
  res.set("X-Frame-Options", "DENY");
  next();
});

app.set("trust proxy", true);

routes(app);

process.on("uncaughtException", function (err) { });

// START SERVER
const port = process.env.PORT || 5001;
const server = app.listen(port, () => {
  logger.info(`[SERVER STARTED] Listening to port [${port}]`);
});

export = server;
