
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

const map = L.map('map')
  .on('load', () => {
    console.log('Карта инициализирована');
  })
  .setView({
    lat: 59.936550,
    lng: 30.32080,
  }, 15);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/map-marker.svg',
  iconSize: [36, 36],
  iconAnchor: [18, 18],
});

const marker = L.marker(
  {
    lat: 59.938635,
    lng: 30.323118,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});

marker.addTo(map);

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 59.938635,
    lng: 30.323118,
  });

  map.setView({
    lat: 59.938635,
    lng: 30.323118,
  }, 15);
});
