// **Dependencies **//
const path = require("path");
const fs = require('fs');

const dbFile = "db/db.json";
const dbRaw = fs.readFileSync(path.resolve(dbFile));
let db = JSON.parse(dbRaw);

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {

        //pull data from json file and send as response in json format
        res.json(db);

    });

    app.post("/api/notes", function(req, res) {

        let newNote = req.body;
        newNote['id'] = '';
        console.log(newNote);

        //add new note object to the existing db array
        db.push(newNote);

        //run loop that will check the value 
        for (let i = 0; i < db.length; i++) {
            if (db[i].id == "") {
                db[i].id = i + 1;
            }
        };

        //write updated db to db.json
        fs.writeFile(dbFile, JSON.stringify(db, null, 2), function(err) {
            if (err) {return console.log(err); }
          });

    });

    app.delete("/api/notes", function(req, res) {

        console.log(req.body);
    
    })
 
}