// const { MongoClient } = require('mongodb');
// const fs = require('fs');
// const credentials = fs.readFileSync('<path_to_certificate>');
// const client = new MongoClient('mongodb+srv://cluster0.rnlik.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
//   sslKey: credentials,
//   sslCert: credentials
// });
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db("testDB");
//     const collection = database.collection("testCol");
//     const docCount = await collection.countDocuments({});
//     console.log(docCount);
//     // perform actions using client
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

require("dotenv").config();


const mongoose = require("mongoose");


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/challenge-accepted",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
