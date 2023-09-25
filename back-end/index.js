const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const ConnectDB = require("./DB/db")
const router = require("./router/router")

const movie = require("./router/movieRouter")
const product = require("./router/Series")
const Auth = require("./router/Auth")



const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

app.use('/api/v1', router)
app.use('/api/v1', product, movie, Auth)



ConnectDB()
const port = process.env.PORT
app.listen(port , ()=> console.log(`http://localhost:${port}`))