<template>
  <Navbar></Navbar>
  <router-view/>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

@font-face {
  font-family: 'Vazir-Black';
  src: url('./assets/fonts/vazir-font/Farsi-Digits/Vazir-Black-FD.eot') format('eot'),
    url('./assets/fonts/vazir-font/Farsi-Digits/Vazir-Black-FD.ttf') format('ttf'),
    url('./assets/fonts/vazir-font/Farsi-Digits/Vazir-Black-FD.woff') format('woff'),
    url('./assets/fonts/vazir-font/Farsi-Digits/Vazir-Black-FD.woff2') format('woff2');
}

html, body {
  @include zero-padding-margin;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  font-family: 'Vazir-Black';

  #app {
    background-color: map-get($color, 'white-light');
    color: map-get($color, 'black');
    border: 2px solid map-get($color, 'gray-light');
    border-radius: 5px;
    direction: rtl;
    text-align: $center;
    padding: 10px $zero-number;
  }
}
</style>