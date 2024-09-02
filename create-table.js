import { sql } from "./db.js";

/*sql`DROP TABLE IF EXISTS videos`.then(() =>{
    console.log("table dropped");
  
})*/

sql`
    CREATE TABLE videos (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        duration INTEGER NOT NULL
    );
`
  .then(() => {
    console.log("table created");
  })
  .catch((error) => {
    console.log('Ocoreu um error: ' + error.message +'\n error: ' + error);
});
