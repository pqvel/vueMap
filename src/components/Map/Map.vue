<script setup>
import { onMounted } from 'vue'
import { data } from '../../core/config/data'
// import { mapConfig } from '../../core/config/map.config'
import { createPlacemarkContent } from './createPlacemarkContent.js'

onMounted(() => {
  ymaps.ready(function () {
    createPlacemarkContent().then(initMap)

    function initMap(PlacemarkContentLayout) {
      var myMap = new ymaps.Map(
          'map',
          {
            // center: [53.905877, 27.560326],
            center: [53.89001, 27.512545],
            zoom: 20
          },
          {
            searchControlProvider: 'yandex#search'
          }
        ),
        myPlacemark = new ymaps.Placemark(
          myMap.getCenter(),
          {},
          {
            iconLayout: 'default#image',
            iconImageHref: 'assets/img/clusterer.svg',
            iconImageSize: [64, 64],
            iconImageOffset: [-5, -38]
          }
        ),
        myPlacemarkWithContent = new ymaps.Placemark(
          [53.89001, 27.512545],
          {
            iconContent: '9999.20 р.',
            cursor: 'default'
          },
          {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'assets/img/1.svg',
            iconImageSize: [100, 32],
            iconImageOffset: [-50, -32],
            iconContentLayout: PlacemarkContentLayout
          }
        )

      myPlacemarkWithContent.events.add('click', function (e) {
        myMap.geoObjects.each((el) => {
          myMap.geoObjects.remove(e.get('target'))
          myMap.geoObjects.add(myPlacemark)
          // el.properties.set('iconContent', 'клик')
          // .set('iconLayoutContent', '<div>$[properties.iconContent]</div>')
        })
      })
      myMap.geoObjects.add(myPlacemarkWithContent)
    }
  })
})
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  width: 100vw;
  height: calc(100vh - 68.46px);
}

.placemark {
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 61px;
  height: 26px;
  font-size: 12px;
  font-weight: 700;
  line-height: 150%;
  color: #056ecf;
}
</style>
