import express from 'express'
import cors from 'cors'
import productsRoutes from './routes/products.js'
import morgan from 'morgan'

const app = express()

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true
  })
)

app.use(express.json())
app.use(morgan('tiny'))

app.use(productsRoutes)

const PORT = 8001

app.get('/', (_req, res) => {
  res.send('Hello world!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
