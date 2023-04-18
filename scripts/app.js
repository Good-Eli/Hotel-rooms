function hideElement(element) {
  element.style.display = 'none';
}

function handleRoomButtons() {
  const rooms = document.querySelectorAll('.room');

  rooms.forEach((room) => {
    const button = room.querySelector('.btn');

    button.addEventListener('click', () => {
      button.disabled = true;
      button.textContent = 'Обработка...';

      const cover = room.querySelector('.cover');
      const coverReserved = room.querySelector('.cover-reserved');

      const handleMouseLeave = () => {
        cover.removeEventListener('mouseleave', handleMouseLeave);
        coverReserved.style.display = 'grid';
        button.textContent = 'Забронировать';
        button.disabled = false;
      };

      cover.addEventListener('mouseleave', handleMouseLeave);
    });
  });
}

handleRoomButtons();

const addRoomBtn = document.querySelector('.add-room');
const removeRoomBtn = document.querySelector('.remove-room');

function addRoom() {
  const rooms = document.querySelectorAll('.room');
  const randomRoomIndex = Math.floor(Math.random() * rooms.length);
  const randomRoom = rooms[randomRoomIndex];
  const newRoom = randomRoom.cloneNode(true);
  const parent = randomRoom.parentNode;
  parent.appendChild(newRoom);
  handleRoomButtons();
}

function removeRoom() {
  const lastRoom = document.querySelector('.room:last-of-type');
  if (lastRoom) {
    lastRoom.remove();
  }
}

addRoomBtn.addEventListener('click', () => {
  addRoom();
});

removeRoomBtn.addEventListener('click', () => {
  removeRoom();
});
