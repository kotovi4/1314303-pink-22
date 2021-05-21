
const mainNavList = document.querySelector('.main-nav__list');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const pageHeader = document.querySelector('.page-header');

pageHeader.classList.remove('page-header--opened');
mainNavList.classList.remove('main-nav--opened');
mainNavList.classList.add('main-nav--closed');
mainNavToggle.classList.remove('main-nav__toggle--closed');


mainNavToggle.addEventListener('click', function() {
  if (mainNavList.classList.contains('main-nav--closed')) {
    mainNavList.classList.remove('main-nav--closed');
    mainNavList.classList.add('main-nav--opened');
    pageHeader.classList.add('page-header--opened');
    pageHeader.classList.remove('page-header--closed');
    mainNavToggle.classList.toggle('main-nav__toggle--closed');
  } else {
    pageHeader.classList.remove('page-header--opened');
    pageHeader.classList.add('page-header--closed');
    mainNavList.classList.remove('main-nav--opened');
    mainNavList.classList.add('main-nav--closed');
    mainNavToggle.classList.toggle('main-nav__toggle--closed');
  }
});
