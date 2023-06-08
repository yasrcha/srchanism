let rooms = document.querySelectorAll('.rooms')
let buttons = document.querySelectorAll('.nav-button')
let roomName = document.querySelectorAll('.room__name')

for (let i = 0; i < rooms.length; i++) {
    const button = buttons[i];
    const room = rooms[i];

    button.onclick = function () {
        removeClass()
        attRoomName(room)
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

function attRoomName(e) {
    let name = e.classList[1]

    roomName[0].innerHTML = `${name}`
    roomName[1].innerHTML = `# ${name}`
}