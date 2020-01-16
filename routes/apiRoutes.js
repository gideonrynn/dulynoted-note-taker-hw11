const path = require("path");
const fs = require('fs');

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {

        //pull data from json file and send as response in json format
        let notesDBraw = fs.readFileSync(path.resolve("db/db.json"));
        let notesDB = JSON.parse(notesDBraw);

        res.json(notesDB);

        //or
        // fs.readFile("db/db.json", "utf8", function(err, data) 
        // { if (err) { throw err;}
        //   res.send(data) //or res.json(data);
        // })

  });
 
}