const express = require("express");
const connectDB = require("./DB/connect");
const app = express();
require("dotenv").config();

/* ROUTERS */
const authRoute = require("./routes/auth.js");



/** middleawres  **/
app.use(express.json());
/* Add middleware to allow CORS requests from any origin */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api/v1", authRoute);



/**  starting server **/
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`started at ${port}`));
  } catch (err) {
    console.error(err);
  }
};
start();
