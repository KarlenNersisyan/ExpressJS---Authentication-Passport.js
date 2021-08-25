import express from "express";
import path from "path";
import bcrypt from "bcrypt"; // apahov gaxtnabar unenalu hamar

let users = []; // nerkayis pahel zangvatsi mej , chishty database-um
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
  res.sendFile(path.resolve("pages/register.html"));
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPwd = await bcrypt.hash(password, 10);

  users.push({
    name: name,
    email: email,
    password: hashedPwd,
  });
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve("pages/login.html"));
});

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(process.env.PORT);
