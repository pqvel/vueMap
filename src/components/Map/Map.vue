<script setup>
import { onMounted } from 'vue'
import { useMainStore } from '../../core/stores/mainStore'
import { createPlacemarkContent } from './map/createPlacemarkContent.js'
import { createClusterContent } from './map/createClusterContent'
import { createIconContent } from './map/createIconContent'

const mainStore = useMainStore()
const { setActivePharmacyId } = mainStore

onMounted(() => {
  ymaps.ready(function () {
    const template = createPlacemarkContent()
    var myMap = new ymaps.Map(
      'map',
      {
        center: [53.905877, 27.560326],
        zoom: 10
      },
      {
        searchControlProvider: 'yandex#search'
      }
    )
    myMap.options.set('minZoom', 5)

    var clusterer = new ymaps.Clusterer({
      clusterIcons: [
        {
          href: 'assets/img/clusterer.svg',
          size: [32, 32],
          offset: [-16, -16]
        }
      ],
      clusterIconContentLayout: createClusterContent()
    })
    const geoObjects = []

    mainStore.pharmacies.forEach((pharmacy, i) => {
      const { content, defaultClass } = createIconContent(pharmacy.products, mainStore.cartProducts)

      const placemark = new ymaps.Placemark(
        pharmacy.location,
        { iconContent: content },
        {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'assets/img/transparent.png',
          iconImageSize: [100, 32],
          iconImageOffset: [-50, -32],
          iconContentLayout: template
        }
      )
      placemark.properties.set({
        class: defaultClass
      })

      placemark.events.add('click', (e) => {
        geoObjects.forEach((el) => {
          el.properties.set({
            activeClass: ''
          })
        })

        const element = e.get('target')
        element.properties.set({ activeClass: 'red' })

        myMap.setCenter(e.get('coords'), myMap.getZoom(), {
          duration: 300
        })

        setActivePharmacyId(pharmacy.id)
      })

      geoObjects[i] = placemark
    })

    myMap.events.add('click', function (e) {
      geoObjects.forEach((el) => {
        el.properties.set({
          activeClass: ''
        })
      })
      setActivePharmacyId('')
    })

    const asideCloseButton = document.querySelector('.pharmacy__close-button')
    asideCloseButton.addEventListener('click', () => {
      geoObjects.forEach((el) => {
        el.properties.set({
          activeClass: ''
        })
      })
      setActivePharmacyId('')
    })

    clusterer.add(geoObjects)
    myMap.geoObjects.add(clusterer)
    myMap.setBounds(clusterer.getBounds(), {
      checkZoomRange: true
    })
  })
})
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  width: 100%;
  height: auto;
}

.r {
  position: absolute;
  bottom: 0;
  right: 0;
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
