"use strict";

var express = require("express");

var app = express();

require("dotenv").config();

var PORT = process.env.PORT || 3000;
app.use(express.json());

var blog = require("./routes/blog");

app.use("/api/v1", blog);

var connectWithDb = require("./config/database");

connectWithDb();
app.listen(PORT, function () {
  console.log("App is started at port no ".concat(PORT));
});
app.get("/", function (req, res) {
  res.send("<h1>This is Homepage blogapp </h1>");
});
//# sourceMappingURL=index.dev.js.map
