/* eslint-disable */
let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let morgan = require('morgan');
PORT = 3001;
let pg = require('pg');
let app = express();
// let bcrypt = require('bcrypt');

let pool = new pg.Pool({
  port: "5432",
  password: 'tehranGHAD123',
  database: 'roy-recruiter',
  host: 'roy-recruiter.cu1jh7bqk0gt.us-west-2.rds.amazonaws.com',
  user: 'baharghadimi'
});

app.use(cors());
pool.connect();
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/all', function () {

  pool.query(`SELECT * FROM posts`)
    .then(res => console.log(res.rows))

})
app.listen(PORT, () => console.log('Listening on port: ' + PORT));