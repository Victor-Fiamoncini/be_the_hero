import 'ts-node/register'
import { resolve } from 'path'
import { config } from 'dotenv'

config({ path: resolve(__dirname, '..', '..', '..', '.env') })

module.exports = {
	development: {
		client: 'postgresql',
		connection: {
			database: process.env.DB_NAME,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './migrations',
		},
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: process.env.DB_NAME,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './migrations',
		},
	},

	production: {
		client: 'postgresql',
		connection: {
			database: process.env.DB_NAME,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './migrations',
		},
	},
}
