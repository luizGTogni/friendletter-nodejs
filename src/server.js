const express = require("express");
const { Server } = require("http");
const nunjucks = require("nunjucks");
const routes = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(routes);

app.set("view engine", "njk");

nunjucks.configure("src/app/views", {
  express: app,
  autoescape: false,
  noCache: true
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running");
});