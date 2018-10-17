const { Client } = require('pg')

const client = new Client({
  user: 'pg',
  host: 'my_postgres',
  database: 'test',
  password: 'example',
  port: 5050,
});

client.connect()

console.log(client);