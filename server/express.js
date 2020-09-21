// Import Middleware
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import compress from "compression";
import devBundle from "./devBundle";
import React from "react";
import ReactDOMServer from "react-dom/server";
import StaticRouter from "react-router-dom/StaticRouter";
import MainRouter from "./../client/MainRouter";
//  Import Routes
import portfolioRoutes from "./routes/portfolio.routes";
// import devBundle from "./devBundle";

// Import Template File

import Template from "./../template";

const app = express();
devBundle.compile(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use("/", portfolioRoutes);

const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.get("*", (req, res) => {
  const context = {};
  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <MainRouter />
    </StaticRouter>
  );
  if (context.url) {
    return res.redirect(303, context.url);
  }

  res.status(200).send(
    Template({
      markup: markup,
    })
  );
});

export default app;
