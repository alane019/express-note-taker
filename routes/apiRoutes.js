const fs = require("fs");
const path = require("path"); 
const dbDir = path.resolve(__dirname, "../db");
let notes = [];

/*
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
*/

module.exports = function(app){ 
	let notes = [];
// serve url routes for client-side js file
// following convention: api in url path for json files
app.get("/api/notes", function(req, res) {

	notes = fs.readFileSync(path.resolve(dbDir, "db.json"), "utf8");
	notes = JSON.parse(notes);
	return res.json(notes); 
});


// save notes
app.post("/api/notes", function(req, res) {
	let notes = fs.readFileSync(path.resolve(dbDir, "db.json"), "utf8");
	notes = JSON.parse(notes);
	console.log(notes);
	console.log("\n");
	var i = 1; 
	notes.forEach(function(note){
		note.id = i;
		i++;
	});
  
	let newNote = req.body;
	console.log(newNote);
	console.log("\n");

  	newNote.id = i;
	notes.push(newNote);

	console.log(notes);
	console.log("\n");
	//let strPath = path.resolve(dbDir, "db.json")
	//strPath = strPath.toString;

	notes = JSON.stringify(notes);
	console.log("after JSON.stringify: ");
	console.log(notes);
	console.log("\n");

    fs.writeFile(path.resolve(dbDir, "db.json"), notes, function(err){
		if(err) throw err;
	});
	res.json(JSON.parse(notes));
	// save button writes note object values to json storage object, and also renders values to html display
});

// delete notes
/*

app.delete("/api/notes/:id", function(req, res) {

});
*/

} // end export
