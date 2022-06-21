import express from "express";
import path from "path";
import morgan from "morgan";
import routes from "./routes";

import config from "./config";

const app = express();

// Settings
app.set("port", process.env.PORT||5000);
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// global variables
app.use((req, res, next) => {
  console.log(config.APPID)
  app.locals.APPID = config.APPID;
  next();
});

// Routes jhahsjhshhe
app.use(routes);

app.use(express.static(path.join(__dirname, "public")));

// 404 handler
app.use((req, res, next) => {
  res.status(404).render("404");
});

export default app;
