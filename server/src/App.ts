import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'

import routes from './routes'

export default class App {
	private app: Application

	public constructor() {
		this.app = express()

		this.middlewares()
	}

	public get getApplication(): Application {
		return this.app
	}

	private middlewares(): void {
		this.app.use(express.json())
		this.app.use(cors())
		this.app.use(morgan('dev'))
		this.app.use(routes)
	}
}
