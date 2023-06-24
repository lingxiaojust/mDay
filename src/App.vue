<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import List from './components/list.vue'
import Home from './pages/Home.vue'
import Menu from './components/menu.vue'
import Header from './components/header.vue'
// import Map from './components/map.vue'
</script>


<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <Header />
  <Menu />
  <!-- <Map /> -->
  <List />
  <Home />
  
</template>


