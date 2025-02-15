const express = require("express");
const app = express();
const port = 5000;
const connect_db = require("./utils/DB");
const contactRoute=require('./routes/contactus')
const cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use('/message', contactRoute)
app.listen(port, () => {
  connect_db();
  console.log(`Example app listening on port http://localhost:${port}`);
});
