const express = require("express");
const urlRoute = require("./routes/url");
const connectToDb = require("./dbConnection");
const config = require("./config");

const app = express();
const PORT = 8001;

connectToDb(config.dbConnectionUrl)
  .then(() => console.log("Connection to DB successful"))
  .catch(() => console.log("Connection to DB failed"));

app.use(express.urlencoded({ extended: true }));
app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
