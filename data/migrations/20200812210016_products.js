
exports.up = function(knex) {
    return knex.schema.createTable('products', table => {
      table
          .increments();
      table
          .string('name', 256)
          .notNullable();
      table
          .text('description', 'longtext')
          .notNullable();
      table
          .integer('price')
          .notNullable();
      table
          .string('condition')
          .notNullable()
      table
          .string('category')
          .notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropIfTableExists('products')
  };
  