const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors());

const server = http.createServer(app);
 
// socket.io Connection Configuration

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"],
    }
});

io.on("connection",(socket) => {
    console.log(`User Connected: ${socket.id}`);
    
    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`user with ID : ${socket.id} joined room: ${data}`);
    })
    socket.on("disconnect", () =>{
        console.log("User Disconnected", socket.id);
    });
});


const PORT = 3001;
server.listen(PORT, () => console.log(`Server Running on port ${PORT}`));