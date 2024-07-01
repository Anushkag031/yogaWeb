const express = require('express') 
const app = express()
const port = process.env.PORT || 5001
require('dotenv').config()


//mongo db connection 


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://anushkagupta319:oCadP1RdsuxHDYJD@yoga.fujusb3.mongodb.net/?retryWrites=true&w=majority&appName=yoga`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => { // redirect to the root URL
  res.send('Hello World!')
})

app.listen(port, () => { // listen on port 3000
  console.log(`Example app listening on port ${port}`)
})
//oCadP1RdsuxHDYJD -> anushkagupta319