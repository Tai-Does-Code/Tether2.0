exports.up = (knex) => {
    return knex.schema.alterTable('users', (table) => {
        table.string('pfp_link').notNullable().defaultTo('default');
    })
};

exports.down = (knex) => {
    return knex.schema.alterTable('users', (table) => {
        table.dropColumn('pfp_link');
    })
};
  