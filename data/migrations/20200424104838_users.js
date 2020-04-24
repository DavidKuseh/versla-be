
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table
        .increments();
    table
        .string('firstName', 128)
        .notNullable();
    table
        .string('lastName', 128)
        .notNullable();
    table
        .string('email', 128)
        .notNullable();
    table
        .string('password', 128)
        .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropIfTableExists('users');
};
