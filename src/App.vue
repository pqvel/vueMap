<script setup>
import Aside from './components/Aside/Aside.vue'
import Header from './components/Header/Header.vue';
import Map from './components/Map/Map.vue'
</script>

<template>
  <Header></Header>
  <Aside></Aside>
  <main>
    <Map></Map>
  </main>
</template>

<style>

main {
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
}
</style>
