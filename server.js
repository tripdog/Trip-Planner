const express = require('express')
const mongo = require('mongodb').MongoClient
const url = "mongodb://localhost:27017"

conat app = express()
let db
mongo.connect(
    url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err, client) => {
        if (err) {
            console.error(err)
            return
        }
        db = client.db("tripcost")
    })

//endpoints

app.post("/trip", (req, res) => {

})

app.get("/trips", (req, res) => {
    
})

app.post("/expense", (req, res) => {
    
})

app.get("/expenses", (req, res) => {
    
})

app.listen(3005, () => console.log("Server Ready Captain!"))
