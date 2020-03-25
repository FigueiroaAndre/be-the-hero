
exports.up = function(knex) {
    // metodo up: o que eu quero que seja feito
  return knex.schema.createTable('incidents', table => {
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();

      table.string('ong_id').notNullable();

      table.foreign('ong_id').references('id').inTable('ongs');
  })
};

exports.down = function(knex) {
    // metodo down: o que fazer caso dê merda
  knex.schema.dropTable('incidents');
};
