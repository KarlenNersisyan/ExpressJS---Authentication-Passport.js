import express from "express";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
  res.sendFile(path.resolve("pages/register.html"));
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("yay");
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve("pages/login.html"));
});

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(process.env.PORT);
