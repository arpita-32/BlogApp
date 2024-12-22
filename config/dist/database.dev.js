"use strict";

var mongoose = require("mongoose");

require("dotenv").config();

var connectWithDb = function connectWithDb() {
  mongoose.connect(process.env.DATABASE_URL).then(function () {
    return console.log("DB connected successfully");
  })["catch"](function (error) {
    console.log("DB facing connection issue");
    console.log(error);
    process.exit(1); // Exit the process on connection failure
  });
};

module.exports = connectWithDb;
//# sourceMappingURL=database.dev.js.map
