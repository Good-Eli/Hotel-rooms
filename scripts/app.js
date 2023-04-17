const buttons = document.querySelectorAll('.btn');
buttons.forEach((button, index) => {
  button.addEventListener('click', function () {
    const div = document.querySelectorAll('.cover-reserved')[index];
    div.style.display = 'grid';
  });
});

function hideElement(element) {
  element.style.display = 'none';
}
