import { resolve } from 'path'
import { config } from 'dotenv'

config({ path: resolve(__dirname, '..', '.env') })

import App from './App'

const { PORT } = process.env
const { _app } = new App()

_app.listen(PORT, () => console.log(`Server running at: ${PORT}`))
