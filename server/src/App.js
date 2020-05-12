import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import routes from './routes'

export default class App {
	constructor() {
		this.app = express()

		this.middlewares()
	}

	get _app() {
		return this.app
	}

	middlewares() {
		this.app.use(cors())
		this.app.use(express.json())
		this.app.use(morgan('dev'))
		this.app.use('/v1', routes)
	}
}
