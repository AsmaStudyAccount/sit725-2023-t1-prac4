var express = require("express");
var app = express();

// Simulated database data
var cardData = [
  {
    title: "Kitten 2",
    image: "images/kitten2.png",
    link: "About Kitten 2",
    description: "Demo description about kitten 2",
  },
  {
    title: "Kitten 3",
    image: "images/kitten3.png",
    link: "About Kitten 3",
    description: "Demo description about kitten 3",
  },
];

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API endpoint to get card data
app.get("/api/cards", (req, res) => {
  res.json(cardData);
});

var port = process.env.port || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
});
