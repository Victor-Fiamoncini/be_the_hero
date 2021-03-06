exports.up = function (knex) {
	return knex.schema.createTable('ongs', (table) => {
		table.increments()
		table.string('name').notNullable().unique()
		table.string('email').notNullable().unique()
		table.string('password').notNullable()
		table.string('whatsapp').notNullable()
		table.string('city').notNullable()
		table.string('uf', 2).notNullable()
		table.timestamps(true, true)
	})
}

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('ongs')
}
