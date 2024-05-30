import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from 'cors'
import hotelsRouter from './routes/hotels.route.js'
import userRouter from './routes/user.route.js'

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 3001;

// connect to db
mongoose.connect('mongodb://localhost:27017/DreamDwell', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/hotels', hotelsRouter)
app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})