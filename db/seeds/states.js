let states = require('../../representatives');

const createState = (knex, state) => {
  return knex('states').insert({
    abbreviation: state.abbreviation
  }, 'id')
    .then((stateId) => {
      let senatorsPromises = [];

      state.senators.forEach(senator => {
        senatorsPromises.push(
          createSenator(knex, {
            name: senator.name,
            title: senator.title,
            state_abbr: senator.state,
            state_id: stateId[0]
          })
        )
      })

      return Promise.all(senatorsPromises)
    })
}

//add party,twitter,url, rank columns to senator table, reeseed


//will have to add in state names (manually? or add
//a new column to the table, update data, then reseed)

const createSenator = (knex, senator) => {
  return knex('senators').insert(senator);   
}

exports.seed = function(knex) {
 return knex('senators').del()
  .then(() => knex('states').del())
  .then(() => {
    let statesPromises = [];

    states.forEach(state => {
      statesPromises.push(createState(knex, state));
    });

    return Promise.all(statesPromises)
  })
  .catch(error => console.log(`Error seeding data: ${error}`));
};
