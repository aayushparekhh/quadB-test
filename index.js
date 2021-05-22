const express = require("express");
const app = express();
const fetch = require("node-fetch");
app.set("view engine", "ejs");
app.use(express.static("public"));
let getCoins = async () => {
  let response = await fetch("https://api.wazirx.com/api/v2/tickers/10");
  let coins = await response.json();
  console.log(coins);
};
app.get("/", async (req, res) => {
  let response = await fetch("https://api.wazirx.com/api/v2/tickers");
  let coins = await response.json();
  // console.log(coins);
  res.render("index.ejs", {
    coins: coins,
  });
});
app.listen(4000, () => {
  console.log("App listening on port 4000");
});
