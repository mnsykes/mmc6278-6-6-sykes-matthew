const express = require("express");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
const app = express();

const exphbs = require("express-handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

module.exports = app;
