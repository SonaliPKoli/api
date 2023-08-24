"use strict";

var Story = require("../models/stories");

var getAllStories = function getAllStories(req, res) {
  var _req$query, categories, story_title, sort, select, queryObject, apiData, sortFix, selectFix, page, limit, skip, myData;

  return regeneratorRuntime.async(function getAllStories$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$query = req.query, categories = _req$query.categories, story_title = _req$query.story_title, sort = _req$query.sort, select = _req$query.select;
          queryObject = {};

          if (categories) {
            queryObject.categories = {
              $regex: categories,
              $options: "i"
            };
          }

          if (story_title) {
            queryObject.story_title = {
              $regex: story_title,
              $options: "i"
            };
          }

          apiData = Story.find(queryObject);

          if (sort) {
            sortFix = sort.split(",").join(" ");
            apiData = apiData.sort(sortFix);
          }

          if (select) {
            selectFix = select.split(",").join(" ");
            apiData = apiData.select(selectFix);
          }

          page = Number(req.query.page) || 1;
          limit = Number(req.query.limit) || 10;
          skip = (page - 1) * limit;
          apiData = apiData.skip(skip).limit(limit);
          _context.next = 13;
          return regeneratorRuntime.awrap(apiData);

        case 13:
          myData = _context.sent;
          res.status(200).json({
            myData: myData,
            nbHits: myData.length
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
};

var getAllStoriesTesting = function getAllStoriesTesting(req, res) {
  var myData;
  return regeneratorRuntime.async(function getAllStoriesTesting$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Story.find(req.query));

        case 2:
          myData = _context2.sent;
          res.status(200).json({
            myData: myData
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports = {
  getAllStories: getAllStories,
  getAllStoriesTesting: getAllStoriesTesting
};