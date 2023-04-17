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


function hideElement(element) {
  element.style.display = 'none';
}
