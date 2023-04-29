import 'dotenv/config'
import express, { Express } from 'express'
import cors from 'cors'
import { createClient } from '@supabase/supabase-js'
import { toolRouter } from './routes/toolRouter.js'
import { userRouter } from './routes/userRouter.js'
import { locationRouter } from './routes/locationRouter.js'
import { authRouter } from './routes/authRouter.js'
import { bookingRouter } from './routes/bookingRouter.js'

const app: Express = express()

const supabaseUrl = 'https://pohzmvfnmggbffatrptn.supabase.co'
const supabaseKey = String(process.env.ANON_KEY)

const supabase = createClient(supabaseUrl, supabaseKey)

// Middleware
app.use(express.json())

// ! Enabling all cors requests
app.use(cors())



// Routes
app.use('/api', authRouter)
app.use('/api/tools', toolRouter)
app.use('/api/users', userRouter)
app.use('/api/locations', locationRouter)
app.use('/api/bookings', bookingRouter)


const PORT: Number = Number(process.env.PORT) || 6969

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
})

export { supabase }