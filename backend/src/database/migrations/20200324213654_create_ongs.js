
exports.up = function(knex) {
    // metodo up: o que eu quero que seja feito
  return knex.schema.createTable('ongs', table => {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf',2).notNullable();
  })
};

exports.down = function(knex) {
    // metodo down: o que fazer caso dê merda
  knex.schema.dropTable('ongs');
};
