const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const cors = require('cors');
const compression = require('compression')
const http = require('http');
const path = require("path");

const PORT = process.env.PORT || 4001

const app = express();
app.use(compression());
app.use(cors());

const server = http.createServer(app);

let db = new sqlite3.Database('./server/db/geo.db', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error(err.message);
  }
});

// geonameid	name	asciiname	alternatenames
// create table geo (geonameid text, name text, asciiname text, alternatenames text);
// sqlite> create table geo (geonameid text, name text, asciiname text, alternatenames text);
// sqlite> .separator "\t"
// sqlite> .import ../GB.tsv geo

app.get('/locations', (req,res) => {

  let q = req.query.q;

  res.set('Content-Type', 'application/json');

  if(!q) {
    res.status(500).send(JSON.stringify({error: 'Missing search parameter'}));
  } else if(q.length < 2) {
    res.status(500).send(JSON.stringify({error: 'Search string is too short; must be longer than 2 characters'}));
  } else {
    db.serialize(()=>{
      db.all('SELECT * FROM geo WHERE name LIKE ?', [`${q}%`], (err,rows) => {
        if(err){
          res.status(500).send({error: err.message});
        } else {
          let loc = rows.map(a => a.name);
          res.send(JSON.stringify(loc));
        }
      });
    });
  }

});

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`) );
