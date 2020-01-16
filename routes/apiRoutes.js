// **Dependencies **//
const path = require("path");
const fs = require('fs');

const dbFile = "db/db.json";
const dbRaw = fs.readFileSync(path.resolve(dbFile));
const db = JSON.parse(dbRaw);

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {

        //pull data from json file and send as response in json format
        res.json(db);

    });

    app.post("/api/notes", function(req, res) {

        //add new note object to the existing db array
        db.push(req.body);

        //write new array to the db.json
        fs.writeFile(dbFile, JSON.stringify(db, null, 2), function(err) {
            if (err) {
              return console.log(err);
            }
            console.log("Success!");
          });

    });

    app.delete("/api/notes", function(req, res) {

        console.log(req.body);
    
    })
 
}