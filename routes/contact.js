var express = require("express");
var router = express.Router();

const AgentDetails = require("../models/Agentmdl").AgentDetails;
const ContactDetails = require("../models/Agentmdl").contactDetails;

router.get("/", async function (req, res, next) {
  var name = await ContactDetails.findOne({ contactFormName: "Osama" }).exec();
  AgentDetails.find((err, agents) => {
    res.render("contact", {
      agentDetails: agents,
      name: name,
    });
  });
});

router.get("/create", function (req, res, next) {
  res.render("agentCreate");
});

router.post("/", function (req, res, next) {
  const contactDetail = new ContactDetails();
  contactDetail.contactFormName = req.body.contactFormName;
  contactDetail.contactFormEmail = req.body.contactFormEmail;
  contactDetail.contactFormQuery = req.body.contactFormQuery;
  contactDetail.save((err) => {
    if (err) {
      const errorArray = [];
      const errorKeys = Object.keys(err.errors);
      errorKeys.forEach((key) => errorArray.push(err.errors[key].message));
      return res.render("/", {
        errors: errorArray,
      });
    }
  });
  res.render("Thankyou", {
    contactName: contactDetail.contactFormName,
  });
});
router.post("/create", function (req, res, next) {
  const agentDetail = new AgentDetails();
  agentDetail.agentName = req.body.agentName;
  agentDetail.agentPhone = req.body.agentPhone;
  agentDetail.agentEmail = req.body.agentEmail;
  agentDetail.agentPosition = req.body.agentPosition;
  agentDetail.agentId = req.body.agentId;
  agentDetail.agencyId = req.body.agencyId;
  agentDetail.save((err) => {
    if (err) {
      const errorArray = [];
      const errorKeys = Object.keys(err.errors);
      errorKeys.forEach((key) => errorArray.push(err.errors[key].message));
      return res.render("agentCreate", {
        errors: errorArray,
      });
    }
    res.redirect("/contact/create");
  });
});

module.exports = router;
