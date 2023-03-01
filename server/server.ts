import 'dotenv/config'
import express, {Express, Router} from 'express'
import { createClient } from '@supabase/supabase-js'
import { toolRouter } from './routes/toolRouter.js'

const app: Express = express()

const supabaseUrl = 'https://pohzmvfnmggbffatrptn.supabase.co'
const supabaseKey = String(process.env.ANON_KEY)

const supabase = createClient(supabaseUrl, supabaseKey)

// const { data: tools, error } = await supabase.from('tools').select('*')

// Middleware 
app.use(express.json())


// Routes
app.use('/api/tools', toolRouter)


// ! Cannot fetch env variables properly
const PORT: Number = Number(process.env.PORT) || 6969

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
})

export { supabase }