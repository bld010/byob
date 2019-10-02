
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/members_of_congress',
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

};
