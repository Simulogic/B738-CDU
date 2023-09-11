import bodyParser from 'body-parser';
import express from 'express';
import { updateDisplayData } from '../main';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/info', (req, res) => {
  res.send('This is Simulogic CDU webserver running correctly');
});

app.post('/update/cdu', (req, res) => {
  updateDisplayData('update/cdu', req.body.data);
  res.send(req.body.data);
});

app.listen(8430);
