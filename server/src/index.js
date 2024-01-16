const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { PORT } = require("./config/serverConfig");

const setupAndStartServer = ()=>{

    app.get('/',(req,res)=>{
        res.send("Hello Server Started");
    })

    io.on('connection', () => { 
        console.log("User Connected");
     });
    
    
    server.listen(PORT, ()=>{
        console.log(`Server running on ${PORT}`);
    });

}

setupAndStartServer();


