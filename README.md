# Members of Congress API

## States 

### List All States


Lists all states and US territories that have representatives in Congress. 

[Click here to see documentation and to try API calls](https://members-of-congress-api.herokuapp.com/)

```
GET /api/v1/states
```

##### Parameters: 
| Name | Type | Description |
| ---- | --- | ---|
| `id`  | `number` | Unique id associated with each state | 
| `abbreviation` | `string` | Two-letter, capitalized abbreviation for a state or territory |
| `name` | `string` | Full name of state or territory |

##### Response: 

| Status | Response |
| --- | --- |
| 200 | Array of state objects |

Example response: 
```json
[
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
```


### Find State By ID


Find specific state by id. `id` is the unique id associated with a state. Use `GET /api/v1/states` to see all states and associated ids. 


```
GET /api/v1/states/:id
```

##### Parameters: 
| Name | Type | Description |
| ---- | --- | ---|
| `id` | `number` | Unique id associated with each state |
| `abbreviation` | `string` | Two-letter, capitalized abbreviation for a state or territory |
| `name` | `string` | Full name of state or territory |

##### Response: 

| Status | Response |
| --- | --- |
| 200 | Array containing selected senator |
| 404 | ```{ "error": "Could not find senator with id 300." }```


Example successful response: 
```json
[
       {
        "id": 169,
        "name": "Louisiana",
        "abbreviation": "LA",
        "created_at": "2019-10-03T01:12:17.283Z",
        "updated_at": "2019-10-03T01:12:17.283Z"
    }
]
```

### Add a New State

Add a new state/territory (Greenland, perhaps?)

```
POST /api/v1/states
```

##### Parameters: 
| Name | Type | Description |
| ---- | --- | ---|
| `abbreviation` | `string` | **Required** Two-letter, capitalized abbreviation for a state or territory | 
| `name` | `string` |  **Required** Full name of state or territory |

##### Response: 

| Status | Response |
| --- | --- |
| 201 | Unique id of newly-created state `{ "id": 342" }` |
| 422 | { error: Expected format: { name: `<String>`, abbreviation `<String>` } You're missing a [requiredParameter] property. }   |

## Senators

### List All Senators

List all senators currently serving in the 116th Congress of the United States.

```
GET /api/v1/senators
```

##### Parameters: 
| Name | Type | Description |
| ---- | --- | ---|
| `id` | `number` | Unique id associated with each senator |
| `name` | `string` | Full name of senator |
| `title` | `string` | Senator's full title (Example: `'Senator, 1st Class`) |
| `state_abbr` | `string` | Two-letter, capitalized abbreviation for a state or territory |
| `state_id` | `number` | Unique id associated with each state |
| `rank` | `string` | Senator's rank (Example: `'junior'` or `'senior'`)
|`party` | `string` | Capitalized, one-letter abbreviation for senator's party (Example: `'R'`,`'D'`, `'I'`, etc.) |
| `twitter_account` | `string` | Senator's official Twitter account handle or `null` if none provided. (Example: `'SenJohnKennedy`)
| `url` | `string` | Senator's official government website URL (Example: `'https://www.kennedy.senate.gov/public'`)

##### Response: 

| Status | Response |
| --- | --- |
| 200 | Array of all senators |

Example response:
```json
[
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
```

### Find Senator By Id

Find senator by `id`. To find all senators' unique ids, use `GET /api/v1/senators`. 

```
GET /api/v1/senators/:id
```

##### Parameters: 
| Name | Type | Description |
| ---- | --- | ---|
| `id` | `number` | Unique id associated with each senator |
| `name` | `string` | Full name of senator |
| `title` | `string` | Senator's full title (Example: `'Senator, 1st Class`) |
| `state_abbr` | `string` | Two-letter, capitalized abbreviation for a state or territory |
| `state_id` | `number` | Unique id associated with each state |
| `rank` | `string` | Senator's rank (Example: `'junior'` or `'senior'`)
|`party` | `string` | Capitalized, one-letter abbreviation for senator's party (Example: `'R'`,`'D'`, `'I'`, etc.) |
| `twitter_account` | `string` | Senator's official Twitter account handle or `null` if none provided. (Example: `'SenJohnKennedy`)
| `url` | `string` | Senator's official government website URL (Example: `'https://www.kennedy.senate.gov/public'`)

##### Response: 

| Status | Response |
| --- | --- |
| 200 | Array containing selected senator. |
| 404 | `{ "error": "Could not find senator with id 300." }` |

Example response: 
```json
[
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
```

### Add Senator

Add senator to database.

```
POST /api/v1/senators
```

##### Parameters: 
| Name | Type | Description |
| ---- | --- | ---|
| `name` | `string` | **Required** Full name of senator |
| `title` | `string` | Senator's full title (Example: `'Senator, 1st Class`) |
| `state_abbr` | `string` | **Required** Two-letter, capitalized abbreviation for a state or territory |
| `state_id` | `number` | **Required** Unique id associated with each state |
| `rank` | `string` | **Required** Senator's rank (Example: `'junior'` or `'senior'`)
|`party` | `string` | **Required** Capitalized, one-letter abbreviation for senator's party (Example: `'R'`,`'D'`, `'I'`, etc.) |
| `twitter_account` | `string` | Senator's official Twitter account handle or `null` if none provided. (Example: `'SenJohnKennedy`)
| `url` | `string` | **Required** Senator's official government website URL (Example: `'https://www.kennedy.senate.gov/public'`)

##### Response: 

| Status | Response |
| --- | --- |
| 201 | New unique id for created senator (Example: `{ "id": 405 } `) |
| 422 | Expected format: { `name:` `<String>`, `title:` `<String>`, `state_abbr`: `<String>`, `state_id:` `<Number>`, `rank:` `<String>`, `party:` `<String>`, `url:` `<String>` } You're missing a [requiredParameter] property.|

### Delete Senator

Remove senator from database. 

```
DELETE /api/v1/senators/:id
```

##### Response:

| Status | Response |
| --- | --- |
| `204` | `No content` (Delete was successful.) |
| `404` | 'Delete unsuccessful. Make sure the senator id is correct in your request url.' |



