const express = require('express');
const app = express();

app.set('port', 3000);
app.use(express.json());

app.listen(app.get('port'), () => {
  console.log(`App is listening on port ${app.get('port')}`)
})

app.get('/', (request, response) => {
  response.send('Hey!')
})