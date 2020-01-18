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

    app.get("/api/notes/:id", function(req, res) {

        let id = req.params.id;

        for (let i = 0; i < db.length; i++) {
            if (id == db[i].id) {
              res.send(db[i]);
            } else {
                res.send(`A note with this name does not exist.`);
            }
        } 
    });

    app.post("/api/notes", function(req, res) {

        let newNote = req.body;

        //add new key value pair to response: key = id, and value = '' (placeholder)
        newNote['id'] = '';
 
        //add new note object to the existing db array
        db.push(newNote);

        //run loop that will check the id value and add number if blank
        for (let i = 0; i < db.length; i++) {
            if (db[i].id == "") {
                db[i].id = i + 1;
            }
        };

        //write updated db to db.json
        fs.writeFile(dbFile, JSON.stringify(db, null, 2), function(err) {
            if (err) {return console.log(err); }

            res.send(db);
          });

    });

    app.delete("/api/notes/:id", function(req, res) {

        // console.log("We need to delete id:" + req.params.id);

        let idDelete = req.params.id;

        //create new array that does not contain the object with the id that should be deleted
        const dbNew = db.filter(db => { return db.id != idDelete});

        //run loop that will reorder ids of each object 
        for (let i = 0; i < dbNew.length; i++) {
            dbNew[i].id = i + 1;
        };

        console.log(dbNew);

        //write updated db to db json file
        fs.writeFile(dbFile, JSON.stringify(dbNew, null, 2), function(err) {
            if (err) {return console.log(err); }

            res.send(dbNew);
        });
    })
 
}