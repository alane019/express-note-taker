//const { json } = require("express");
const { ifError } = require("assert");
const fs = require("fs");
const path = require("path"); 
const dbDir = path.resolve(__dirname, "../db");


module.exports = function(app){ 

// serve url routes for client-side js file
// following convention: api in url path for json files
	// get method will be shortest
  app.get("/api/notes", function(req, res) {

 let notes = fs.readFileSync(path.resolve(dbDir, "db.json"), "utf8");
 // might need to parse json
     //.... notes = Array.from(notes);
	 //..... return res.json(notes);
	 //......return res.notes;
 notes = JSON.parse(notes);
 return res.json(notes); //res.json(notes);
	
  });

// save notes


// delete notes

  
} // end export
