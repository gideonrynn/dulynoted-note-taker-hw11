// **Dependencies **//
const path = require("path");
const fs = require('fs');


module.exports = function(app) {
    
    //route that will display all notes in db in json format
    app.get("/api/notes", function(req, res) {

        //set db location, read and parse data from file to be used in routes
        let dbFile = "db/db.json";
        let dbRaw = fs.readFileSync(path.resolve(dbFile));
        let db = JSON.parse(dbRaw);

        //pull data from json file and send as response in json format
        res.json(db);

    });

    //route that will display specific object by id
    app.get("/api/notes/:id", function(req, res) {

        //set db location, read and parse data from file
        let dbFile = "db/db.json";
        let dbRaw = fs.readFileSync(path.resolve(dbFile));
        let db = JSON.parse(dbRaw);

        //set variable that holds id from request entered by user
        let id = req.params.id;

        //set for loop to find object with requested id and send it to the browser
        for (let i = 0; i < db.length; i++) {
            if (id == db[i].id) {
              res.send(db[i]);
            } else {
                res.send(`A note with this name does not exist.`);
            }
        } 

    });

    app.post("/api/notes", function(req, res) {
        
        //set db location, read and parse data from file
        let dbFile = "db/db.json";
        let dbRaw = fs.readFileSync(path.resolve(dbFile));
        let db = JSON.parse(dbRaw);


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

            //send updated db as response
            res.send(db);

          });

    });

    app.delete("/api/notes/:id", function(req, res) {

        //set db location, read and parse data from file
        let dbFile = "db/db.json";
        let dbRaw = fs.readFileSync(path.resolve(dbFile));
        let db = JSON.parse(dbRaw);

        //set variable that holds id from request entered by user
        let idDelete = req.params.id;

        //create new filtered array that does not contain the object with the id that should be deleted
        let dbNew = db.filter(db => { return db.id != idDelete});

        //run loop that will reorder ids of each object 
        for (let i = 0; i < dbNew.length; i++) {
            dbNew[i].id = i + 1;
        };

        //write updated db to db json file
        fs.writeFile(dbFile, JSON.stringify(dbNew, null, 2), function(err) {
            if (err) {return console.log(err); }
 
        });

        res.send(`Note deleted from db!`);

    })
 
}