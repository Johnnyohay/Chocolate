var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


const insertDB = function(err, db) {
    if (err) throw err;
    var dbo = db.db("Chocolate");
    var myobj = { name: "Hot Chocolate", price: "12" };
    dbo.collection("Product").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }

MongoClient.connect(url, insertDB);