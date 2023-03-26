<script setup>
import AsidePharmacy from './AsidePharmacy.vue'
import AsideProduct from './AsideProduct.vue'
</script>

<template>
  <aside class="aside scroll">
    <AsidePharmacy />
    <ul>
      <AsideProduct />
      <AsideProduct />
      <AsideProduct />
      <AsideProduct />
    </ul>
  </aside>
</template>

<style lang="scss">
.aside {
  position: fixed;
  padding-top: 10px;
  overflow-y: auto;
  left: 0;
  top: 68px;
  width: 100%;
  max-width: 360px;
  height: 100%;
  max-height: 100%;
  background-color: $grayBg;
}
</style>
