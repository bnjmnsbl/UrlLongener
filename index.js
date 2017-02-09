var express = require("express")
var app = express();
var mongo = require("mongodb").MongoClient;
var check = require("./urlCheck.js");


var db;
var port = process.env.PORT;

app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs");


mongo.connect('mongodb://localhost:27017/benDB', (err, database) => { 
    if(err) return console.log(err);
    db = database;
    app.listen(port, function() {
    console.log("Listening on port " + port);
})
})

app.get("/new/*", (req, res) => {
    var urlLong = req.originalUrl.substring(5)
    if (check.urlCheck(urlLong)) {
        var urlShort = check.genShort();
        db.collection("urls").save({long: urlLong, short: urlShort}, (err, result) => {
        if (err) console.log(err);     
        res.send("Link saved! Your shortlink is " + urlShort)   
        });
   
    } else {
        console.log("Not a valid url!")
    }
    
    ;
})
app.get("/*", (req, res)=> {
    var shortLink = req.originalUrl.substring(1);
     db.collection("urls").find({short: shortLink}).toArray(function(err, results) {
        if (err) return console.log(err) 
        /*if (!results.length) {
            console.log("Empty!");
        } else {
        console.log(results[0].long);
        }*/
        res.render("index.ejs", {link: results})
       
    })
    
});
