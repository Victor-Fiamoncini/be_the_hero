import * as Knex from 'knex'

export async function up(knex: Knex): Promise<any> {
	return knex.schema.createTable('ongs', (table) => {
		table.string('id').primary()
		table.string('name').notNullable().unique()
		table.string('email').notNullable().unique()
		table.string('whatsapp').notNullable()
		table.string('city').notNullable()
		table.string('uf', 2).notNullable()
		table.timestamps(true, true)
	})
}

export async function down(knex: Knex): Promise<any> {
	return knex.schema.dropTableIfExists('ongs')
}
