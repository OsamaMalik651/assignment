//Require Mongoose module
var mongoose = require("mongoose");
//Set up mongoose connection to the required collection
var mongoDB =
  "mongodb+srv://osama_124:YpDYuGHSvbeeiuIM@cluster0.c0cml.mongodb.net/packages?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// Get the Connection
var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("we are connected");
});
const uniqueValidator = require("mongoose-unique-validator");
const packageSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  imgsrc: {
    type: String,
    // required: "Please enter the image URL",
    trim: true,
  },
  imgtitle: {
    type: String,
    // required: "Please enter the location Name",
  },
  pagesource: {
    type: String,
    // required: "Please enter the page URL",
  },
  packagedetail: {
    type: String,
    // required: "Please enter the Package Details.",
  },
});
packageSchema.plugin(uniqueValidator);
module.exports.Packages = mongoose.model("Packages", packageSchema);
