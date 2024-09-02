/*import 'dotenv/config';
import postgres from 'postgres';

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID, DATABASE_URL } = process.env;
//PGPASSWORD = decodeURIComponent(PGPASSWORD);

const URL = DATABASE_URL;

/*const sql = postgres({
    host: PGHOST,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: 'require',
    connection: {
      options: `project=${ENDPOINT_ID}`,
    },
  });*/

 /* export const sql = postgres*/

 // app.js
 import postgres from 'postgres';
 import dotenv from 'dotenv';
 
 dotenv.config();
 
 let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
 
 export const sql = postgres({
   host: PGHOST,
   database: PGDATABASE,
   username: PGUSER,
   password: PGPASSWORD,
   port: 5432,
   ssl: 'require',
   connection: {
     options: `project=${ENDPOINT_ID}`,
   },
 });
 
/* async function getPgVersion() {
   const result = await sql`select version()`;
   console.log(result);
 }
 
 getPgVersion();*/