/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users_roles', function (table) {
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
    table.integer('role_id').unsigned();
    table.foreign('role_id').references('id').inTable('roles').onDelete('CASCADE').onUpdate('CASCADE');
    table.primary(['user_id', 'role_id']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users_roles');
};
