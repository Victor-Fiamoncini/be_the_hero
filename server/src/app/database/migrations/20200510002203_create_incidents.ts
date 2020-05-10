import * as Knex from 'knex'

export async function up(knex: Knex): Promise<any> {
	return knex.schema.createTable('incidents', (table) => {
		table.increments()
		table.string('title').notNullable()
		table.string('description').notNullable()
		table.decimal('value').notNullable()
		table.string('ong_id').notNullable()
		table.timestamps(true)

		table.foreign('ong_id').references('id').inTable('ongs')
	})
}

export async function down(knex: Knex): Promise<any> {
	return knex.schema.dropTableIfExists('incidents')
}
