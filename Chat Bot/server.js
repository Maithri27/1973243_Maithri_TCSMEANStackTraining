const { Socket } = require("dgram");

let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

io.on("connection", (socket) => {
    //console.log("client connected to application......");
    socket.on("chat", (data) => {
        console.log(' Hey! ' + data.name);
        console.log(' Your Message: ' + data.message);
    })

})

http.listen(9999, () => console.log('server running on port number 9999'));