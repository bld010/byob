
exports.up = function(knex) {
  return Promise.all([
  
    knex.schema.createTable('states', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('abbreviation');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('senators', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('title');
      table.string('state_abbr');
      table.integer('state_id').unsigned();
      table.foreign('state_id').references('states.id');

      table.timestamps(true, true)
    }),

    knex.schema.createTable('representatives', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('title');
      table.string('state_abbr');
      table.integer('state_id').unsigned();
      table.foreign('state_id').references('states.id');
      table.string('district');

      table.timestamps(true, true)
    })


  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('representatives'),
    knex.schema.dropTable('senators'),
    knex.scehma.dropTable('states')
  ]);
};
