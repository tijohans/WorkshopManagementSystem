import 'dotenv/config'
import express, {Express} from 'express'
import { createClient } from '@supabase/supabase-js'

const app: Express = express()

const supabaseUrl = 'https://pohzmvfnmggbffatrptn.supabase.co'
const supabaseKey = String(process.env.ANON_KEY)

const supabase = createClient(supabaseUrl, supabaseKey)

// const { data: tools, error } = await supabase.from('tools').select('*')






// ! Cannot fetch env variables properly
const PORT: Number = Number(process.env.PORT) || 6969

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
})