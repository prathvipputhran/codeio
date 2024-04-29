const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://prathvics20:PrrA22024@cluster0.rfszxig.mongodb.net/OpenElectiveDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

app.listen(3001, () => {
  console.log("Server is setup");
});
