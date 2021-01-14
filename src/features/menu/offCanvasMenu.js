const hamburger = document.querySelector('.hamburger');
const aside = document.querySelector('.layout__left');

hamburger.addEventListener('click', function (e) {
    aside.classList.toggle('layout__left_hidden');
});