const { Socket } = require("dgram");

let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})
io.on("connection", (socket) => {
    // console.log("client connected to application......");
    socket.on("chat", (data) => {
        var name = data.name;
        var msg = data.message;
        //console.log(name); console.log(msg)
        mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {

            if (!err1) {
                var data = {
                    "Name": name,
                    "Message": msg
                }
                console.log(data)
                let db = client.db("meanstack");
                db.collection("chatLog").insertOne(data, (err2, result) => {
                    if (!err2) {
                        console.log(" ");
                    } else {
                        console.log(err2.message);
                    }
                    client.close();
                });
            }
        })
    })

})

http.listen(9999, () => console.log('server running on port number 9999'));