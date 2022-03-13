const { MongoClient, ServerApiVersion } = require('mongodb')

const client = new MongoClient(process.env.RAYCRUSDB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('bd conected');
  // perform actions on the collection object
  client.close();
});