
exports.up = function(knex) {
  return knex.schema.createTable("user_profiles", table => {
    table
        .increments();
    table
        .integer("userId")
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    table
        .string("userName")
        .notNullable()
        .references("firstName")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    table   
        .string("email")
        .notNullable()
        .references("email")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_profiles');
};
