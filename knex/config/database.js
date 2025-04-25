const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile);

module.exports = knex;
// This file is used to configure the database connection for the application.
// It uses the knex library to create a connection to the database.
// The configuration is defined in the knexfile.js file, which contains the database connection settings.
