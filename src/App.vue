<template>
 <HeaderData/>
  <router-view></router-view>
</template>

<script>
//import Nav from './components/Nav.vue'

import HeaderData from './components/HeaderData.vue';

export default {
  name: 'App',
  components: {
    //Nav,
    
    HeaderData,
    
  }
}
</script>

<style>
#App{
  background-image: linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%);
}
</style>
