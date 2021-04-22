
//
// const box = document.getElementById('randomBox')
// function logName(name){
//     console.log(name)
// }
//
// function randomBox(){
//     let random = Math.round(Math.random()*200)
//     let randomId = Math.round(Math.random()*10)
//     console.log(random)
//     box.innerHTML += `
//     <div class="boxes" id="${randomId}" style="width: ${random}px; height: ${random}px; border: 3px solid black; margin: 10px"></div>
//     `
//     let boxes = document.getElementsByClassName('boxes')
//     for (let i = 0; i < boxes.length; i++) {
//         boxes[i].addEventListener('click', color)
//     }
// }
//
// function color(e){
//     let colors = ["red", "yellows", "blue", "green", "brown", "orange"]
//     let names = ['ona', 'petras', 'antanas', 'skirmantas', 'laura', 'kate']
//     e.target.style.backgroundColor = colors[Math.round(Math.random()*6)]
//     e.target.innerText = names[Math.round(Math.random()*6)]
// }
// export {logName, randomBox, color}