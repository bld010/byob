const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', 3000);
app.use(express.json());

app.listen(app.get('port'), () => {
  console.log(`App is listening on port ${app.get('port')}`)
})

app.get('/api/v1/states', (request, response) => {
  database('states').select()
    .then((states) => {
      response.status(200).json(states);
    })
    .catch((error) => {
      response.status(500).json({ error });
    })
})

app.post('/api/v1/states', (request, response) => {
  const state = request.body;

  for (let requiredParameter of ['name', 'abbreviation']) {
    if (!state[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { name: <String>, 
          abbreviation: <String> } You're missing a 
          ${requiredParameter} property.`});
    }
  }

  database('states').insert(state, 'id')
    .then(state => {
      response.status(201).json({ id: state[0] })
    })
    .catch(error => { 
      response.status(500).json({ error })
    });
})