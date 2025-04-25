const knex = require('../config/database');

const selectData = async () => {
  try {
    // Select specific columns and rename them with aliases
    const result = await knex('users').select('id as uid', 'first_name as ufirst_name', 'email as uemail');
    console.log('Data selected successfully:', result);
  } catch (error) {
    console.error('Error selecting data:', error);
  } finally {
    await knex.destroy();
  }
};
selectData();
