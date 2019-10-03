
exports.up = function(knex) {
  return knex.schema(table('states'), (table) => {
    table.string('name')
  })
};

exports.down = function(knex) {
  return knex.schema.table('states', (table) => {
    table.dropColumn('name');
  })
};
