import { resolve } from 'path'
import { config } from 'dotenv'

config({ path: resolve(__dirname, '..', '.env') })

import App from './App'

const { PORT } = process.env
const { getApplication } = new App()

getApplication.listen(PORT, () => console.log(`Server running at: ${PORT}`))
