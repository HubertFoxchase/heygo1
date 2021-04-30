# Getting Started with Create React App

Checkout the project then run

### `npm install`

To build React front-end run

### `npm run build-front`

To initialise database from the GB.tsv files

'''
$ cd ./server/db
$ sqlite3 geo.db
sqlite> create table geo (geonameid text, name text, asciiname text, alternatenames text);
sqlite> .separator "\t"
sqlite> .import ../data/GB.tsv geo
'''

To run application locally run

### `npm start`

Open [http://localhost:4001](http://localhost:4001) to view it in the browser.

You can also view the deployed version on Heruku https://heygo-test-ml.herokuapp.com


# Implementation details

Application runs on Express server and uses sqlite to store location data.
Both API and React front-end run from the same Express application. The API is mapped into the /locations folder while React app "leaves" at the root.
