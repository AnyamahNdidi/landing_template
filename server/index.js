
require('dotenv').config()
// require("./config/db.js")
const express = require("express")
const app = express()
const cors = require("cors")

// const myRouter = require("./Router/router")
// const myRouter2 = require("./Router/router2")
const port = process.env.PORT || 4040



// app.get("/", (req, res)=>{
//    res.send("port is running well well well")
// })

app.use(express.json())
app.use(cors())
// app.use("/api", require("./Router/router2"))
// app.use("/api", myRouter)

app.listen(port, ()=>{
  console.log( `port is running on ${port}`);
})