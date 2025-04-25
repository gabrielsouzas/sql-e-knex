const knex = require('../config/database');

const selectData = async () => {
  try {
    const result = await knex('users').select('id', 'first_name').where('id', 1);
    console.log('Data selected successfully:', result);
  } catch (error) {
    console.error('Error selecting data:', error);
  } finally {
    await knex.destroy();
  }
};
selectData();
