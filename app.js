const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');


const app = express();

let list = [];
let item = "";
let workItems = [];


app.use(bodyParser.urlencoded(
    extended = true
));

app.use(express.static("public"));

app.listen(3000, function () {
    console.log("server running on port 3000");
});

app.set('view engine', 'ejs');




app.get("/", function (req, res) {


    let day = date.getDate();

    res.render('list', {
        listTitle: day,
        listItems: list
    });
});

app.post("/", function (req, res) {


    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");

    } else {
        list.push(item);
        res.redirect("/");
    }


});




app.get("/work", function (req, res) {
    res.render('list', {
        listTitle: "Work",
        listItems: workItems
    });
});

app.get("/about", function (req, res) {
    res.render("about");
})
