const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('userToDo.db');

db.run('CREATE TABLE listTa(name text)');

db.close();
