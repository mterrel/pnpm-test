const express = require("express");
const cors = require('cors')
const app = express();
const port = 4000;

const corsOptions = {
  origin: "https://t3-portfolio-a.vercel.app",
};

app.use(cors())

app.get("/", (req, res) => {
  res.send( req.headers.origin);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

