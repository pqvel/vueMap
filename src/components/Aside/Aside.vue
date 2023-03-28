<script setup>
import AsidePharmacy from './AsidePharmacy.vue'
import AsideProduct from './AsideProduct.vue'
import { useMainStore } from '../../core/stores/mainStore';
import { storeToRefs } from 'pinia';
const mainStore = useMainStore()
const { cartProducts, isOpenAside, activePharmacy } = storeToRefs(mainStore)

</script>

<template>
  <aside class="aside scroll" :class="{ active: isOpenAside }, {hide: !isOpenAside}">
    <AsidePharmacy :pharmacy="activePharmacy" />
    <ul v-for="product in cartProducts">
      <AsideProduct :product="product.product"/>
    </ul>
  </aside>
</template>

<style lang="scss">
.aside {
  position: fixed;
  padding-top: 10px;
  overflow-y: auto;
  left: -100%;
  top: 68px;
  width: 100%;
  max-width: 360px;
  height: 100%;
  max-height: 100%;
  background-color: $grayBg;
  z-index: 1000;
  opacity: 0;
  

  &.active {
    animation-duration: 0.5s;
    animation-name: fromLeft;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }

  &.hide {
    animation-duration: 0.5s;
    animation-name: toLeft;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }
}

@keyframes fromLeft {
  from {
    left: -360px;
    opacity: 0;
  }

  to {
    left: 0;
    opacity: 1;
  }
}

@keyframes toLeft {
  from {
    left: 0%;
    opacity: 1;
  }

  to {
    left: -360px;
    opacity: 0;
  }
}
</style>
