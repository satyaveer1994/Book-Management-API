const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require('./Route/authRoutes');
const bookRoutes = require('./Route/bookRoutes');
require("dotenv").config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: "true",
    useUnifiedTopology: "true",
  })

  .then(() => console.log("mongodb is connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});