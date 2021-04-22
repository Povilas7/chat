// const chatForm = document.getElementById('chat-form');
// const chatMessages = document.querySelector('.chat-messages');
// const roomName = document.getElementById('room-name');
// const userList = document.getElementById('users');
//
// const { username, room } = Qs.parse(location.search, {
//     ignoreQueryPrefix: true,
// });
//
// const socket = io();
//
// // Join chatroom
// socket.emit('joinRoom', { username, room });
//
// //Get room and users
// socket.on('roomUsers', ({room, users}) => {
//     outputRoomName(room);
//     outputUsers(users);
// })
//
//
// // Message from server
// socket.on('message', message => {
//     console.log(message)
//     outputMessage(message)
//
//     // Scroll down
//     chatMessages.scrollTop = chatMessages.scrollHeight
// })
//
// // Message submit
// chatForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//
//     // Get message text
//     let msg = e.target.elements.msg.value;
//     //
//     // msg = msg.trim();
//     //
//     // if (!msg) {
//     //     return false;
//     // }
//
//     // Emit message to server
//     socket.emit('chatMessage', msg);
//
//     // Clear input
//     e.target.elements.msg.value = '';
//     e.target.elements.msg.focus();
// });
//
// function outputMessage(message) {
//     const div = document.createElement('div');
//     div.classList.add('message');
//     div.innerHTML = `<p class="meta">${message.username}<span>${message.time}</span></p>
//                 <p class="text">
//                     ${message.text}
//                 </p>`;
//     document.querySelector('.chat-messages').appendChild(div)
// }
// //add room name to Dom
// function outputRoomName(room){
//     roomName.innerText = room
// }
// //add user name to Dom
// function outputUsers(users){
//     userList.innerHTML = `
//     ${users.map(user => `<li>${user.username}</li>`).join('')}
//     `
// }
//
// //Prompt the user before leave chat room
// document.getElementById('leave-btn').addEventListener('click', () => {
//     const leaveRoom = confirm('Are you sure you want to leave the chatroom?');
//     if (leaveRoom) {
//         window.location = '../index.html';
//     } else {
//     }
// });
// let playerSymbol = document.getElementById('playerSymbol')
// let playerSymbolTwo = document.getElementById('playerSymbolTwo')
// let scissorsOne = document.getElementById('scissors')
// let rockOne = document.getElementById('rock')
// let paperOne = document.getElementById('paper')
// let scissorsTwo = document.getElementById('scissorsTwo')
// let rockTwo = document.getElementById('rockTwo')
// let paperTwo = document.getElementById('paperTwo')
// let playerOne = document.getElementById('playerOne')
// let playerTwo = document.getElementById('playerTwo')
//
// const socket = io();
//
// socket.on('userConnect', (data) =>{
//     socket.emit('singUser', data)
// })
//
// socket.on('userOneId', (players) => {
//     console.log(players.p1)
//     if(players.p1){
//         pOneScissors()
//         pOneRock()
//         pOnePaper()
//     }
// })
// let playerOneSymbol = null
// let playerTwoSymbol = null
// const symbol = {
//     scissors: "https://images-na.ssl-images-amazon.com/images/I/810Tz4tXUyL._AC_SL1500_.jpg",
//     rock: "https://topmeaning.com/english/images/img/EN/b/boulder.jpg",
//     paper: "https://centrum.lv/files/6Hg568OFfnDokbazYLDuJaqlx2FQgOFZ.jpg"
// }
// scissorsOne.addEventListener('click', pOneScissors)
// rockOne.addEventListener('click', pOneRock)
// paperOne.addEventListener('click', pOnePaper)
//
// function pOneScissors(){
//     socket.emit('p1Chosen1', 'scissors')
//     playerOne.style.display = "none"
// }
// function pOneRock(){
//     socket.emit('p1Chosen1', 'rock')
//     playerOne.style.display = "none"
// }
// function pOnePaper(){
//     socket.emit('p1Chosen1', 'paper')
//     playerOne.style.display = "none"
// }


// const socket = io()
//
// import {logName, randomBox, color} from "./modules/nameLogger.js";
// import {clear} from "./modules/randomcolor.js";
//
// logName('petras')
// randomBox()
// randomBox()
// randomBox()
// randomBox()
//
// color()
//
// clear()
//
// const submit = document.getElementById('submit')
// const firstBox = document.getElementsByClassName('firstBox')[0]
// const name = document.getElementById('name')
//
// let heroesChosen = []
// let nameSelect = []
//
// submit.addEventListener('click', submitFun)
//
//
// function submitFun(e){
//
// console.log(e)
// }