const knex = require('../config/database');

knex('users')
  .select('*')
  .then((rows) => {
    console.log(rows);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  })
  .finally(() => {
    knex.destroy();
  });
// This code snippet demonstrates how to use the knex library to connect to a database and fetch data from the 'users' table.
// It selects all rows from the 'users' table and logs them to the console.
// If an error occurs during the query, it logs the error message.
// Finally, it closes the database connection using knex.destroy().
// This is a simple example of how to use knex to interact with a database in a Node.js application.
// It shows how to establish a connection, perform a query, handle errors, and clean up resources.
// This code is useful for testing the database connection and ensuring that the configuration is set up correctly.
