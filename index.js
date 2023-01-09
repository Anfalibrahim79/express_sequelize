const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
require("dotenv").config()
const port = process.env.PORT_APP || 3003

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use("/api", routes)


app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})