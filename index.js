const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

// app.set("view engin", "ejs");
app.set("views", path.join(__dirname, "/views"));
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Port is listenig at ${port}`);
});
app.get("/ig/:Username", (req, res) => {
  let { Username } = req.params;
  const instaData = require("./data.json");
  let data = instaData[Username];
  console.log("okay");
  if (data) {
    res.render("insta.ejs", { data });
  } else {
    res.render("Error.ejs");
  }
});
