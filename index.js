let express = require("express");
let app = express();
let requests = require("requests");
let hbs = require("hbs");
let path = require("path");
let port = process.env.PORT || 8000;
app.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "/partials/"));
app.set("views", "views");
app.get("/", (req,res) => {
    res.render("index");  
})
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})