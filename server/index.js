
const express = require("express")
const cors = require('cors');
const swaggerUI= require("swagger-ui-express");
const YAML= require("yamljs");
const swaggerJsDocs= YAML.load("./api.yaml");
const {userController}= require("./routes/user.routes")
const {dashboardController}= require("./routes/dashboard.routes")

const authController=require("./routes/signin.routes")

const app = express();
const PORT = process.env.PORT || 8080;

const Connection = require("./Config/db");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
app.use(express.json());
app.use(cors());

app.use("/auth", authController);
app.use("/user", userController);
app.use("/dashboard", dashboardController);

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.listen(PORT, async () => {
  try {
    await Connection;
    console.log("Server is connected to database");
    console.log(`server is running on ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
