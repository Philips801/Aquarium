import express from "express";
import { all } from "./database/db.mjs";

const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", async (req, res) => {
   const shops = await all(shops);
    res.render("home", { pageTitle: "My Practice Site", shops });
   });

app.get("/faq", (req, res) => {
  res.render("faq");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
