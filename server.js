const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const app = express()

//Database Connection
const mongoose = require("./config/db.js")

const port = process.env.PORT ? process.env.PORT : "3000"

const methodOverride = require("method-override")
const morgan = require("morgan")

//Use Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
app.use(morgan("dev"))

//Root Route
app.get("/", async (req, res) => {
  res.render("index.ejs")
})

const authRouter = require("./routes/auth")

app.use("/auth", authRouter)

// Server - Listen on the configured part
app.listen(port, () => {
  console.log(`The express app os listening on port ${port}`)
})
