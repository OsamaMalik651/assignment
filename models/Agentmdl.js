var mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://osama_124:YpDYuGHSvbeeiuIM@cluster0.c0cml.mongodb.net/packages?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopolog: true });
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("we are connected");
});

const uniqueValidator = require("mongoose-unique-validator");
const agentSchema = new mongoose.Schema({
  agentName: {
    type: String,
  },
  agentPhone: {
    type: String,
  },
  agentEmail: {
    type: String,
  },
  agentPosition: {
    type: String,
  },
  agentId: {
    type: String,
  },
  agencyId: {
    type: String,
  },
});

const contactPageSchema = new mongoose.Schema({
  contactFormName: {
    type: String,
  },
  contactFormEmail: {
    type: String,
  },
  contactFormQuery: {
    type: String,
  },
});

agentSchema.plugin(uniqueValidator);
contactPageSchema.plugin(uniqueValidator);

module.exports.contactDetails = mongoose.model("Contacts", contactPageSchema);
module.exports.AgentDetails = mongoose.model("Agents", agentSchema);
