const express = require("express");
const { rm, existsSync } = require("fs");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");

const gru = require("./scripts/minion");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public", "out")));

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.get("/minion", (req, res) => {
  // let userid = req.headers.userid;
  // if (userid == "" || userid == undefined) {
  //   res.send("Error - Please use a userid.");
  // } else {
  //   const minion = gru.createMinion(userid);
  //   res.send(minion);
  // }
  const minion = gru.createMinion();
  res.send(minion);
});

app.delete("/delete", (req, res) => {
  if (existsSync("./public/out")) {
    rm(`./public/out`, { recursive: true }, (err) => {
      if (err) {
        // File deletion failed
        console.error(err.message);
        return;
      }
    });
    res.send("public/out has been deleted");
  } else {
    res.send("public/out does not exist");
  }
});

app.listen(port, () => {
  console.log(`Node.js listening on port ${port}`);
});
