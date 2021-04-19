const mainNav = document.querySelector('.main-nav__list');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const pageHeader = document.querySelector('.page-header');

pageHeader.classList.remove('page-header--opened');
mainNav.classList.remove('main-nav--opened');
mainNav.classList.add('main-nav--closed');

mainNavToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.remove('page-header--opened');
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
  }
});
