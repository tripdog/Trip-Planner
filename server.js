const express = require("express");
const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

const app = express();

app.use(express.json());

let db, trips, expenses;

app.listen(3005, () => console.log("Server ready"));

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err);
      return;
    }
    db = client.db("tripcost");
    trips = db.collection("trips");
    expenses = db.collection("expenses");
  }
);



//endpoints
app.post("/trip", (req, res) => {
  const name = req.body.name;
    trips.insertOne({ name: name }, (err, result) => {
        if (err) {
            console.error(err)
            res.status(500).json({ err: err })
            return
        }
        console.log(result)
        res.status(200).json({ ok: true })
  });
});

app.get("/trips", (req, res) => {
    /* */
});

app.post("/expense", (req, res) => {
  /* */
});

app.get("/expenses", (req, res) => {
  /* */
});


