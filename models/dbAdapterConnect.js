const {MongoClient} = require("mongodb")
const url  = "mongodb://localhost:27017/";

const client = MongoClient(uri);

async function findMongoDoc(price){
    //connect:
    await client.connect();
    //check if there's a pulse 
    console.log("connected");

    await client.db("admin").command({ping : 1})

    //function we built
    const myResult = await client.db("chocolate")
    .collection("product")
    .findOne({name: `${price}` });
    //closing after connecitng 
    await client.close();

    return myResult;
}


exports.findPrice = findMongoDoc;