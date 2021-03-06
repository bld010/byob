const express = require('express');
const app = express();

const path = require('path');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')))

app.listen(app.get('port'), () => {
  console.log(`App is listening on port ${app.get('port')}`)
})

app.get('/api/v1/states', (request, response) => {
  database('states').select()
    .then((states) => {
      if (states.length) {
        response.status(200).json(states);
      } else {
        response.status(404).json({
          error: "No states found."
        })
      }
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

app.get('/api/v1/states/:id', (request, response) => {
  database('states').where('id', parseInt(request.params.id)).select()
    .then(states => {
      if (states.length) {
        response.status(200).json(states);
      } else {
        response.status(404).json({
          error: `Could not find state with id ${request.params.id}`
        })
      }
    })
    .catch(error => {
      response.status(500).json({ error });
    })
})

app.get('/api/v1/senators', (request, response) =>  {
  database('senators').select()
    .then((senators) => {
      if (senators.length) {
        response.status(200).json(senators)
      } else {
        response.status(404).json({
          error: `No senators found.`
        })
      }
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

app.get('/api/v1/senators/:id', (request, response) => {
  database('senators').where('id', parseInt(request.params.id)).select()
    .then(senators => {
      if (senators.length) {
        response.status(200).json(senators);
      } else {
        response.status(404).json({
          error: `Could not find senator with id ${request.params.id}.`
        })
      }
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

app.post('/api/v1/senators', (request, response) => {
  let senator = request.body;

  for (let requiredParameter of [
    'name', 
    'title',
    'state_abbr',
    'state_id',
    'rank',
    'party',
    'url'
    ]) {

      let errorText = `
        Expected format: { 
          name: <String>, 
          title: <String>, 
          state_abbr: <String>, 
          state_id: <Number>, 
          rank: <String>, 
          party: <String>, 
          url: <String> }
          You're missing a ${requiredParameter} property.`

      if (!senator[requiredParameter]) {
        return response.status(422)
        .json({ error: errorText });
      }
  }

  database('senators').insert(senator, 'id')
    .then(senatorId => {
      response.status(201).json({ id: senatorId[0]})
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

app.delete('/api/v1/senators/:id', (request, response) => {

  database('senators').where('id', parseInt(request.params.id)).select().del()
    .then(success => {
      if (success) {
        response.status(204).json({ success })
      } else {
        response.status(404).send(`Delete unsuccessful. Make sure the senator id is correct in your request url.`)
      }
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname+'/client/build/index.html'))
})