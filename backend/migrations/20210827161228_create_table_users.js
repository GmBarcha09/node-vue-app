const Knex = require("knex")
/**
 *
 * @param {Knex} knex
 */

const up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments().primary();
    table.string("username")
    table.string("email")
    table.string("address")
    table.string("age")
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
  });
};

const down = function (knex) {
    return knex.schema.dropTable("users");
};

module.exports = {
  up,
  down,
}
