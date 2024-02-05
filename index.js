const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World from Kubernetes!");
});

app.get("/dummy", (req, res) => {
  res.send("This is a dummy GET request!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
