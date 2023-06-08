let rooms = document.querySelectorAll('.rooms')
let buttons = document.querySelectorAll('.nav-button')

for (let i = 0; i < rooms.length; i++) {
    const button = buttons[i];
    const room = rooms[i];

    button.onclick = function () {
        removeClass()
        room.classList.toggle('open-rooms')
    }
}

function removeClass() {
    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i]
        let roomActive = room.classList.contains('open-rooms')

        if(roomActive) {
            room.classList.remove('open-rooms')
        }
    }
}