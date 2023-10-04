const http = require("http");
const{Server} = require("socket.io");
const cors = require("cors");
//server creation
const httpServer = http.createServer();
//config socket
const io = new Server(httpServer,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
        allowedHeaders:["flock-chat"],
        credentials:true,
    },
});
//port
const PORT = process.env.PORT || 3001;

//socket 
io.on("connection",socket=>{
    console.log("connected user",socket.id);
    socket.on("join_room",roomId=>{
        socket.join(roomId);
        console.log(`user ${socket.id} has joined room ${roomId} `)
    })
    socket.on("send_msg",data=>{
        socket.to(data.roomId).emit("recieve_msg",data);
        console.log(data,"DATA")
    })
    socket.on("disconnect",function(){
        console.log("A user disconnected",socket.id);
    })
})

//listener
httpServer.listen(PORT,function(){
    console.log(`server running on port ${PORT}`)
})