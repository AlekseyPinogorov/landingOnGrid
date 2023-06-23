let search = document.querySelector('.search-btn');
let searchMenu = document.querySelector('.search');
let searchClose = document.querySelectorAll('.search-btn--closed');

search.addEventListener('click', function() {
    searchMenu.classList.toggle('search--active');
})

searchClose.forEach(function (el) {
  el.addEventListener('click', function () {

    searchMenu.classList.remove('search--active');
  })
})
