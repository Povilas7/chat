// const express = require('express')
// const path = require('path')
// const http = require('http')
// const socketio = require('socket.io')
// const formatMessage = require('./utils/messages')
// const {userJoin, getCurrentUser, userLeave, getRoomUsers} = require('./utils/users')
//
// const app = express();
//
// const server = http.createServer(app)
// const PORT = 4000 || process.env.PORT;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const io = socketio(server)

// io.on('connect', socket => {
//     socket.on('joinRoom', ({username, room}) => {
//         const user = userJoin(socket.id, username, room)
//         socket.join(user.room)
//
//         socket.emit('message', formatMessage('Admin', 'Welcome to ChatCord!') )
//
//         //Broadcast when a user connect
//         socket.broadcast
//             .to(user.room)
//             .emit('message', formatMessage('Admin', `${user.username} has joined the chat`))
//
//         //send users and room info
//         io.to(user.room).emit('roomUsers', {
//             room: user.room,
//             users: getRoomUsers(user.room)
//         })
//     })
//     // listen for chatMessage
//     socket.on('chatMessage', msg => {
//         const user = getCurrentUser(socket.id)
//         io.to(user.room).emit('message', formatMessage(user.username, msg))
//     })
//     // user disconnect
//     socket.on('disconnect', () => {
//         const user = userLeave(socket.id)
//
//         if(user){
//             io.to(user.room).emit('message', formatMessage('Admin', `${user.username} has left the chat!`) )
//         }
//         // io.to(user.room).emit('roomUsers', {
//         //     room: user.room,
//         //     users: getRoomUsers(user.room)
//         // })
//     })
// })
//
// app.use(express.static(path.join(__dirname, 'public')));

const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

const app = express();

const server = http.createServer(app)
const io = socketio(server)

server.listen(4000)

app.use(express.static(path.join(__dirname, 'public')))



io.on('connect', socket =>{

})













// let users = []
// let players = {
//     p1: "",
//     p2: ""
// }


// io.on('connect', socket =>{
    // socket.emit('userConnect', socket.id, 'user connect')
    //
    // users.push(socket.id)
    // console.log(users)
    //
    // socket.on('singUser', (data) => {
    //     console.log(data, socket.id)
    //     if(users[0] === socket.id){
    //         players.p1 = data
    //         socket.emit('userOneId', players)
    //     }
    // })
// })

// io.on('connection', socket => {
//
//     // EMIT EVENT TO INDIVIDUAL SOCKET
//     socket.emit('welcome', "hi how are you")
//
//     // EMIT TO ALL SOCKETS EXCEPT YOURs
//     socket.broadcast.emit('new', "new socket here")
//
//     // RECEIVE EVENT JOINROOM
//     socket.on('joinRoom', roomName => {
//         // JOIN SOCKET TO ROOM
//         socket.join(roomName)
//     })
//
//     // RECEIVE EVENT MESSAGE
//     socket.on('message', message => {
//         // EMIT TO PARTICULAR ROOM
//         socket.broadcast.to('room1').emit('hello', message)
//     })
//
//     // RECEIVE EVENT
//     socket.on('hello', (data) => {
//         console.log(socket.id)
//         console.log(data)
//     })
//
//     // EVENT WHEN SOCKET DISCONNECTS
//     socket.on('disconnect', () => {
//         console.log('socket disconnected')
//     })
// })