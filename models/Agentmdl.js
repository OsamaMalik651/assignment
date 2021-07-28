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
//Agent details schema to be followed while saving the new agent details.

const agentSchema = new mongoose.Schema({
  agentName: {
    type: String,
    required: "Please enter the post title.",
    trim: true,
    unique: "The agent name must be unique.",
  },
  agentPhone: {
    type: String,
    required: "Please enter the post title.",
    trim: true,
    unique: "The phone number must be unique.",
  },
  agentEmail: {
    type: String,
    required: "Please enter the post title.",
    trim: true,
    unique: "The email must be unique.",
  },
  agentPosition: {
    type: String,
  },
  agentId: {
    type: String,
    required: "Please enter the post title.",
    trim: true,
    unique: "The agent ID must be unique.",
  },
  agencyId: {
    type: String,
  },
});

//Contact form schema. No unique validation added here.
const contactPageSchema = new mongoose.Schema({
  contactFormName: {
    type: String,
    required: "Please enter full name.",
  },
  contactFormEmail: {
    type: String,
    required: "Please enter Email.",
  },
  contactFormQuery: {
    type: String,
    required: "Please enter your query.",
  },
});

agentSchema.plugin(uniqueValidator);
contactPageSchema.plugin(uniqueValidator);

module.exports.contactDetails = mongoose.model("Contacts", contactPageSchema);
module.exports.AgentDetails = mongoose.model("Agents", agentSchema);
