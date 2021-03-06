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
    var urlShort = "";

    urlLong = check.urlAdapt(urlLong);

 // check if url already exists in database
      db.collection("urls").findOne({long: urlLong}, function (err, doc){
    if (err) console.log(err);
    if (doc){
      console.log("Entry already found");
      res.render("pages/shortlink", {link: doc.short});
    } else {
      // The long URL was not found in the long_url field in our urls
      // collection, so we need to create a new entry

    if (check.urlCheck(urlLong)) {
        console.log(urlLong + " returned true");
        urlShort = check.genShort();
        db.collection("urls").save({long: urlLong, short: urlShort}, (err, result) => {
        if (err) console.log(err);     
        });
        res.render("pages/shortlink", {link: urlShort})
    } else {
        
        res.render("pages/error")
    }    }
  });

});

app.get("/*", (req, res)=> {
    var shortLink = req.originalUrl.substring(1);
     db.collection("urls").find({short: shortLink}).toArray(function(err, results) {
        if (err) return console.log(err) 
        
        res.render("pages/index", {link: results})
       
    })
    
});
