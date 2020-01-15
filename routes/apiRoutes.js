// const path = require("path");
// const fs = require('fs');

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        
        getNotes()
        // res.sendFile(path.normalize(__dirname, "../db", "/db.json"));
        
        
        // let db = "db/db.json";
        // let notesDBraw = fs.readFileSync(path.resolve(db));
        // let notesDB = JSON.parse(notesDBraw);

        //reads db file and console.logs contents
        // console.log(notesDB);

        // insert the variable that represents the data from the db.json object, send it to the client
        res.json(notesDB);
        
    })

}