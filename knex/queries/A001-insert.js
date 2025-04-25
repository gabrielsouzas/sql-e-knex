const knex = require('../config/database');

const data = [
  {
    first_name: 'Tanner',
    last_name: 'Mayo',
    email: 'vitae.diam@consectetueripsum.ca',
    password_hash: 'QLN12HIN3RL',
    salary: 4500,
  },
  {
    first_name: 'Brittany',
    last_name: 'Stewart',
    email: 'nibh.sit@nunc.edu',
    password_hash: 'ROM35HMM4SA',
    salary: 3000,
  },
  {
    first_name: 'Ferris',
    last_name: 'Hall',
    email: 'neque.Morbi@porttitorscelerisqueneque.edu',
    password_hash: 'YTU15GQR9HT',
    salary: 1412,
  },
  {
    first_name: 'Jacob',
    last_name: 'Manning',
    email: 'risus.at@sociis.edu',
    password_hash: 'EQS93HLI6QZ',
    salary: 6000,
  },
];

const insertData = async () => {
  try {
    const result = await knex('users').insert(data);
    console.log('Data inserted successfully:', result);
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    await knex.destroy();
  }
};
insertData();
// This code inserts a new user into the 'users' table in the database using Knex.js.
// It defines a data object with user information and then calls the insertData function to perform the insertion.
