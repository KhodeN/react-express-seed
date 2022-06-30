import express from "express";

const app = express();
const port = 3001;

app.get("/api/hello", (req, res) => {
  res.json({
    field1: "value1",
    field2: "value2",
  });
});

app.use(express.static("../frontend/build"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
