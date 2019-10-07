
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
<td>{ "error": "Could not find senator with id 300." }</td>
</tr>
</tbody>
</table>
`

const getAllSenatorsParametersTable = `<table>
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
<td>Unique id associated with each senator</td>
</tr>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td>Full name of senator</td>
</tr>
<tr>
<td><code>title</code></td>
<td><code>string</code></td>
<td>Senator's full title (Example: 'Senator, 1st Class)</td>
</tr>
<tr>
<td><code>state_abbr</code></td>
<td><code>string</code></td>
<td>Two-letter, capitalized abbreviation for a state or territory</td>
</tr>
<tr>
<td><code>state_id</code></td>
<td><code>number</code></td>
<td>Unique id associated with each state</td>
</tr>
<tr>
<td><code>rank</code></td>
<td><code>string</code></td>
<td>Senator's rank (Example: 'junior' or 'senior')</td>
</tr>
<tr>
<td><code>party</code></td>
<td><code>string</code></td>
<td>Capitalized, one-letter abbreviation for senator's party (Example: 'R', 'D', 'I', etc.)</td>
</tr>
<tr>
<td><code>twitter_account</code></td>
<td><code>string</code></td>
<td>Senator's official Twitter account handle or <code>null</code> if none provided. (Example: 'SenJohnKennedy)</td>
</tr>
<tr>
<td><code>url</code></td>
<td><code>string</code></td>
<td>Senator's official government website URL (Example: 'https://www.kennedy.senate.gov/public')</td>
</tr>
</tbody>
</table>`


const getAllSenatorsExampleResponse = [
	{
        "id": 355,
        "name": "John Barrasso",
        "title": "Senator, 1st Class",
        "state_abbr": "WY",
        "state_id": 196,
        "created_at": "2019-10-03T01:12:17.361Z",
        "updated_at": "2019-10-03T01:12:17.361Z",
        "rank": "junior",
        "party": "R",
        "twitter_account": "SenJohnBarrasso",
        "url": "https://www.barrasso.senate.gov"
    },
    {
      "id": 365,
      "name": "James Inhofe",
      "title": "Senator, 2nd Class",
      "state_abbr": "OK",
      "state_id": 201,
      "created_at": "2019-10-03T01:12:17.367Z",
      "updated_at": "2019-10-03T01:12:17.367Z",
      "rank": "senior",
      "party": "R",
      "twitter_account": "InhofePress",
      "url": "https://www.inhofe.senate.gov"
  }
]

const getAllSenatorsResponseTable = `
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
<td>Array of all senators</td>
</tr>
</tbody>
</table>
`



const getSpecificSenatorParametersTable = `<table>
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
<td>Unique id associated with each senator</td>
</tr>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td>Full name of senator</td>
</tr>
<tr>
<td><code>title</code></td>
<td><code>string</code></td>
<td>Senator's full title (Example: 'Senator, 1st Class)</td>
</tr>
<tr>
<td><code>state_abbr</code></td>
<td><code>string</code></td>
<td>Two-letter, capitalized abbreviation for a state or territory</td>
</tr>
<tr>
<td><code>state_id</code></td>
<td><code>number</code></td>
<td>Unique id associated with each state</td>
</tr>
<tr>
<td><code>rank</code></td>
<td><code>string</code></td>
<td>Senator's rank (Example: 'junior' or 'senior')</td>
</tr>
<tr>
<td><code>party</code></td>
<td><code>string</code></td>
<td>Capitalized, one-letter abbreviation for senator's party (Example: 'R', 'D', 'I', etc.)</td>
</tr>
<tr>
<td><code>twitter_account</code></td>
<td><code>string</code></td>
<td>Senator's official Twitter account handle or <code>null</code> if none provided. (Example: 'SenJohnKennedy')</td>
</tr>
<tr>
<td><code>url</code></td>
<td><code>string</code></td>
<td>Senator's official government website URL (Example: 'https://www.kennedy.senate.gov/public')</td>
</tr>
</tbody>
</table>`


const getSpecificSenatorExampleResponse = [
	{
        "id": 355,
        "name": "John Barrasso",
        "title": "Senator, 1st Class",
        "state_abbr": "WY",
        "state_id": 196,
        "created_at": "2019-10-03T01:12:17.361Z",
        "updated_at": "2019-10-03T01:12:17.361Z",
        "rank": "junior",
        "party": "R",
        "twitter_account": "SenJohnBarrasso",
        "url": "https://www.barrasso.senate.gov"
    }
]

const getSpecificSenatorResponseTable =`
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
<td>Array containing selected senator.</td>
</tr>
<tr>
<td>404</td>
<td>{ "error": "Could not find senator with id 300." }</td>
</tr>
</tbody>
</table>
`


const postNewStateParametersTable = `
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
<td><code>abbreviation</code></td>
<td><code>string</code></td>
<td><strong>Required</strong> Two-letter, capitalized abbreviation for a state or territory</td>
</tr>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td><strong>Required</strong> Full name of state or territory</td>
</tr>
</tbody>
</table>`;

const postNewStateResponseTable = `
<table>
<thead>
<tr>
<th>Status</th>
<th>Response</th>
</tr>
</thead>
<tbody>
<tr>
<td>201</td>
<td>Unique id of newly-created state (Example: { "id": 342" })</td>
</tr>
<tr>
<td>422</td>
<td>{ error: Expected format: { name: &lt;String&gt;, abbreviation &lt;String&gt; } You're missing a [requiredParameter] property. }</td>
</tr>
</tbody>
</table>`;



const postNewSenatorParametersTable =`<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td><strong>Required</strong> Full name of senator</td>
</tr>
<tr>
<td><code>title</code></td>
<td><code>string</code></td>
<td>Senator's full title (Example: 'Senator, 1st Class')</td>
</tr>
<tr>
<td><code>state_abbr</code></td>
<td><code>string</code></td>
<td><strong>Required</strong> Two-letter, capitalized abbreviation for a state or territory</td>
</tr>
<tr>
<td><code>state_id</code></td>
<td><code>number</code></td>
<td><strong>Required</strong> Unique id associated with each state</td>
</tr>
<tr>
<td><code>rank</code></td>
<td><code>string</code></td>
<td><strong>Required</strong> Senator's rank (Example: 'junior'or 'senior')</td>
</tr>
<tr>
<td><code>party</code></td>
<td><code>string</code></td>
<td><strong>Required</strong> Capitalized, one-letter abbreviation for senator's party (Example: 'R', 'D', 'I', etc.)</td>
</tr>
<tr>
<td><code>twitter_account</code></td>
<td><code>string</code></td>
<td>Senator's official Twitter account handle or <code>null</code> if none provided. (Example: 'SenJohnKennedy')</td>
</tr>
<tr>
<td><code>url</code></td>
<td><code>string</code></td>
<td><strong>Required</strong> Senator's official government website URL (Example: 'https://www.kennedy.senate.gov/public')</td>
</tr>
</tbody>
</table>`;

const postNewSenatorResponseTable = `
<table>
<thead>
<tr>
<th>Status</th>
<th>Response</th>
</tr>
</thead>
<tbody>
<tr>
<td>201</td>
<td>New unique id for created senator (Example: { "id": 405 })</td>
</tr>
<tr>
<td>422</td>
<td>Expected format: {name:&lt;String&gt;, title: &lt;String&gt;, state_abbr: &lt;String&gt;, state_id:&lt;Number&gt;, rank: &lt;String&gt;, party: &lt;String&gt;, url: &lt;String&gt; } You're missing a [requiredParameter] property.</td>
</tr>
</tbody>
</table>`;

const deleteSenatorResponseTable = `<table>
<thead>
<tr>
<th>Status</th>
<th>Response</th>
</tr>
</thead>
<tbody>
<tr>
<td>204</td>
<td><code>No content</code> (Delete was successful.)</td>
</tr>
<tr>
<td>404</td>
<td>'Delete unsuccessful. Make sure the senator id is correct in your request url.'</td>
</tr>
</tbody>
</table>`

export const getAllStatesInfo = {
  fetchCall: {
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    },
    request_url: '/api/v1/states'
    },
  endpoint_method_and_url: 'GET /api/v1/states',
  description: 'List all states in API',
  parameters_table: getAllStatesParametersTable,
  example_response: getAllStatesExampleResponse,
  response_table: getAllStatesResponseTable
}

export const getSpecificStateInfo = {
  fetchCall: {
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    },
    request_url: '/api/v1/states/:id'
  },
  endpoint_method_and_url: 'GET /api/v1/states/:id',
  description: 'Find specific state by id',
  parameters_table: getSpecificStateParametersTable,
  example_response: getSpecificStateExampleResponse,
  response_table: getSpecificStateResponseTable
}

export const getAllSenatorsInfo = {
  fetchCall: {
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    },
    request_url: '/api/v1/senators'
  },
  endpoint_method_and_url: 'GET /api/v1/senators',
  description: 'List all senators',
  parameters_table: getAllSenatorsParametersTable,
  example_response: getAllSenatorsExampleResponse,
  response_table: getAllSenatorsResponseTable
}

export const getSpecificSenatorInfo = {
  fetchCall: {
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    },
    request_url: '/api/v1/senators/:id'
  },
  endpoint_method_and_url: 'GET /api/v1/senators/:id',
  description: 'Find specific senator by id',
  parameters_table: getSpecificSenatorParametersTable,
  example_response: getSpecificSenatorExampleResponse,
  response_table: getSpecificSenatorResponseTable
}


export const postNewStateInfo = {
  fetchCall: {
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null,
    },
    request_url: '/api/v1/states'
  },
  endpoint_method_and_url: 'POST /api/v1/states',
  description: 'Add a new state/territory',
  parameters_table: postNewStateParametersTable,
  example_response: null,
  response_table: postNewStateResponseTable
}

export const postNewSenatorInfo = {
  fetchCall: {
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null
    },
    request_url: '/api/v1/senators'
  },
  endpoint_method_and_url: 'POST /api/v1/senators',
  description: 'Add a new senator',
  parameters_table: postNewSenatorParametersTable,
  example_response: null,
  response_table: postNewSenatorResponseTable
}

export const deleteSenatorInfo = {
  fetchCall: {
    options: {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    },
    request_url: '/api/v1/senators/:id'
  }, 
  endpoint_method_and_url: 'DELETE /api/v1/senators/:id',
  description: "Delete a senator by id",
  parameters_table: null,
  example_response: null,
  response_table: deleteSenatorResponseTable
}