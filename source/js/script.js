
const mainNavList = document.querySelector('.main-nav__list');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const pageHeader = document.querySelector('.page-header');

pageHeader.classList.remove('page-header--opened');
mainNavList.classList.remove('main-nav--opened');
mainNavList.classList.add('main-nav--closed');
mainNavToggle.classList.remove('main-nav__toggle--hide');

mainNavToggle.onclick = function() {
  pageHeader.classList.toggle('page-header--opened');
  pageHeader.classList.toggle('page-header--closed');
  mainNavList.classList.toggle('main-nav--opened');
  mainNavList.classList.toggle('main-nav--closed');
  mainNavToggle.classList.toggle('main-nav__toggle--closed');
};
