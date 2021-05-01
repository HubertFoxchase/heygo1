# HeyGo Coding Challenge

Checkout the project then run

### `npm install`

To build React front-end run

### `npm run build-front`

To initialise database from the GB.tsv files

```

$ sqlite3 ./server/db/geo.db
sqlite> create table geo (geonameid text, name text, asciiname text, alternatenames text);
sqlite> .separator "\t"
sqlite> .import ./server/data/GB.tsv geo
```

To run application locally run

### `npm start`

Open [http://localhost:4001](http://localhost:4001) to view it in the browser.

You can also view the deployed version on Heruku https://heygo-test-ml.herokuapp.com


# Implementation details

Application runs on Express server and uses sqlite to store location data.

Both API and React front-end run from the same Express application.

The API is mapped into the /locations folder while React app is mapped into root /.

For a larger API, I'd consider using ORM such as knex, put routes into a separate file and implement controllers for a cleaner code and maintainability. However, for the purpose of the exercise, I think the "lean" solution is fine.
