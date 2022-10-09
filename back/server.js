const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    code: 200,
    message: "Success!",
  });
});

app.get("*", (req, res) => {
  res.status(404).send({
    code: 404,
    message: "Not Found: invalid endpoint",
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
