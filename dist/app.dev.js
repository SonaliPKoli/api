"use strict";

require("dotenv").config();

var express = require("express");

var app = express();

var connectDB = require("./db/connect");

var cors = require("cors");

var PORT = process.env.PORT || 5000;

var stories_routes = require("./routes/stories");

app.get("/", function (req, res) {
  res.send("Hi , I am live");
}); //middleware or to set router

app.use(cors());
app.use("/api/stories", stories_routes);

var start = function start() {
  return regeneratorRuntime.async(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(connectDB(process.env.MONGODB_URL));

        case 3:
          app.listen(PORT, function () {
            console.log("".concat(PORT, " Yes I am connected"));
          });
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

start();