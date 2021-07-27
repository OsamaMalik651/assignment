var express = require("express");
var router = express.Router();
var rg = require("random-greetings");

var moment = require("moment");

const Package = require("../models/pckgmdl").Packages;

router.get("/create", function (req, res, next) {
  res.render("package-create");
});
router.post("/", function (req, res, next) {
  const package = new Package();
  package.id = req.body.id;
  package.imgsrc = req.body.imgsrc;
  package.imgtitle = req.body.imgtitle;
  package.pagesource = req.body.pagesource;
  package.packagedetail = req.body.packagedetail;
  package.save((err) => {
    if (err) {
      const errorArray = [];
      const errorKeys = Object.keys(err.errors);
      errorKeys.forEach((key) => errorArray.push(err.errors[key].message));
      return res.render("package-create", {
        errors: errorArray,
      });
    }
    res.redirect("/");
  });
});

router.get("/", function (req, res, next) {
  // var data = cardData;
  Package.find((err, packages) => {
    res.render("index", {
      Packages: packages,
      greeting: rg.greet(),
      time: moment().format("MMMM Do YYYY"),
    });
  });
});

// router.get("/", function (req, res, next) {
//   var data = cardData;
//   res.render("index", {
//     bookStore: data,
//     greeting: rg.greet(),
//     time: moment().format("MMMM Do YYYY"),
//   });
// });

module.exports = router;
