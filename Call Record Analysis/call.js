let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"
let fs = require("fs");
let data = fs.readFileSync("call_data.json");
console.log(data.toString());
let jsonString = data.toString();
let anotherJSON = JSON.parse(jsonString);
console.log("Number of records are " + anotherJSON.length);

mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
    if (!err1) {
        let db = client.db("meanstack");
        db.collection("Calls").insertMany(anotherJSON, (err2, result) => {
            if (!err2) {
                console.log("Records Inserted: " + result.insertedCount);
            } else {
                console.log(err2.message);
            }
            client.close();
        });

    }
});