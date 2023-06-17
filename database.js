import { Pool, Client } from 'pg';

const pool = newPool({
  user: 'local',
  host: 'localhost',
  database: 'db',
  password: 'local',
  port: 5432,
})

console.log(await pool.query('SELECT NOW()'))

const client = new Client({
  user: 'local',
  host: 'localhost',
  database: 'db',
  password: 'local',
  port: 5432,
})

await client.connect()

console.log(await client.query('SELECT NOW()'))

await client.end()