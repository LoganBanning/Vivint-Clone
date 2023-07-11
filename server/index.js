require('dotenv').config();
const massive = require('massive');
const express = require('express');
const { SERVER_PORT, PASSWORD } = process.env;
const addLead = require('./controllers/addLeadInfo');

console.log('password', PASSWORD);
const app =express();

const PORT = SERVER_PORT

app.use(express.json());

app.use(express.static(`${__dirname}/../build`));

massive({
  host: '127.0.0.1',
  database: 'db',
  port: 5432,
  user: 'local',
  password: 'local',
  ssl: false,
})
.then((db) => {
  app.set('db', db)
  console.log('DB Ready')
  }).catch((err) => {
    console.log(err);
});


app.post('/api/addLead', addLead.addLeadInfo);

const port = PORT || 5000;

app.listen(port, () => console.log(`running on ${port}`))