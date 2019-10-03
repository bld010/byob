let states = require('../../representatives');


const createState = (knex, state) => {
  return knex('states').insert({
    abbreviation: state_abbreviation
  })
}

//will have to add in state names

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
