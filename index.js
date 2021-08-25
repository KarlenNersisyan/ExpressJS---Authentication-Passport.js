import express from "express";
import path from "path";

const app = express();

app.get("/register", (req, res) => {
  res.sendFile(path.resolve("pages/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve("pages/login.html"));
});

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(process.env.PORT);
