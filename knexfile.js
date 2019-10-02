// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/members_of_congress',
      useNullAsDefault: true
    },
    migrations: {
      directory: './db/migrations'
    }
  }

};
