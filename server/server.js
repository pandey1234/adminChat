const express = require("express");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "/../public");

let app = express();
let server = http.createServer(app);
let io = socketIo(server);

app.use(express.static(publicPath));

io.on("connection", (socket) => {
    console.log("A new user just connected to the server");
    console.log(socket.id);


// getting message from client
    socket.on('gettingMessage', (details) => {
        console.log("details : ", details);
    });

    socket.on("disconnect", () => {
        console.log("A new user just disconnected to the server");
    })
});

server.listen(port, () => {
    console.log("port has started");
})