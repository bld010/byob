
const getAllStatesParametersTable = `<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>id</code></td>
<td><code>number</code></td>
<td>Unique id associated with each state</td>
</tr>
<tr>
<td><code>abbreviation</code></td>
<td><code>string</code></td>
<td>Two-letter, capitalized abbreviation for a state or territory</td>
</tr>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td>Full name of state or territory</td>
</tr>
</tbody>
</table>`


const getAllStatesResponseTable = `
<table>
<thead>
<tr>
<th>Status</th>
<th>Response</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>Array of state objects</td>
</tr>
</tbody>
</table>`

const getAllStatesExampleResponse = [
   {
        "id": 169,
        "name": "Louisiana",
        "abbreviation": "LA",
        "created_at": "2019-10-03T01:12:17.283Z",
        "updated_at": "2019-10-03T01:12:17.283Z"
    },
    {
        "id": 171,
        "name": "North Carolina",
        "abbreviation": "NC",
        "created_at": "2019-10-03T01:12:17.289Z",
        "updated_at": "2019-10-03T01:12:17.289Z"
    }
]

export const getAllStates = {
  fetchCall: {
    options: {},
    request_url: '/api/v1/states'
    },
  description: 'Get all states in API',
  parameters_table: getAllStatesParametersTable,
  example_response: getAllStatesExampleResponse,
  response_table: getAllStatesResponseTable
  
}


const getSpecificStateParametersTable = `
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>id</code></td>
<td><code>number</code></td>
<td>Unique id associated with each state</td>
</tr>
<tr>
<td><code>abbreviation</code></td>
<td><code>string</code></td>
<td>Two-letter, capitalized abbreviation for a state or territory</td>
</tr>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td>Full name of state or territory</td>
</tr>
</tbody>
</table>`


const getSpecificStateExampleResponse = [
  {
   "id": 169,
   "name": "Louisiana",
   "abbreviation": "LA",
   "created_at": "2019-10-03T01:12:17.283Z",
   "updated_at": "2019-10-03T01:12:17.283Z"
}
]

const getSpecificStateResponseTable = `
<table>
<thead>
<tr>
<th>Status</th>
<th>Response</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>Array containing selected senator</td>
</tr>
<tr>
<td>404</td>
<td><code>{ "error": "Could not find senator with id 300." }</code></td>
</tr>
</tbody>
</table>
`

export const getSpecificState = {
  fetchCall: {
    options: {},
    request_url: '/api/v1/states/'
  },
  description: 'Get specific state by ID',
  parameters_table: getSpecificStateParametersTable,
  example_response: getSpecificStateExampleResponse,
  response_table: getSpecificStateResponseTable
}


