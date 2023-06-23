const map = document.querySelector('.map__descr')
const mapClose = document.querySelector('.map__close')

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.762986, 37.6308],
        zoom: 14,
        controls: []
        });


    var myPlacemark = new ymaps.Placemark([55.770233, 37.636787], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/location.svg',
        iconImageSize: [12, 12],
        iconImageOffset: [0, 0]
        });

        myMap.geoObjects.add(myPlacemark);

        myPlacemark.events.add('click', function (e) {
          map.classList.add('map-open')
        });

        myMap.events.add('click', function (e) {
         map.classList.remove('map-open')
      });
}

mapClose.addEventListener('click', function() {
  map.classList.remove('map-open')
})
