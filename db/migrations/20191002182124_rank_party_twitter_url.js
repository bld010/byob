
exports.up = function(knex) {
  return knex.schema.table('senators', (table) => {
    table.string('rank');
    table.string('party');
    table.string('twitter_account');
    table.string('url')
  })
};

exports.down = function(knex) {
  return knex.schema.table('senators', (table) => {
    table.dropColumn('rank');
    table.dropColumn('party');
    table.dropColumn('twitter_account');
    table.dropColumn('url');
  })
};
