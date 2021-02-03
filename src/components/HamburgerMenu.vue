<template>
  <div class="navbar-hamburger-menu" id="hamburger-menu" @click="hambur()">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'HamburgerMenu',
  methods: {
    ...mapMutations(['hambur'])
  }
}
</script>

<style lang="scss" scoped>

.navbar-hamburger-menu {
  display: none;
  cursor: pointer;

  .bar1, .bar2, .bar3 {
    width: 40px;
    height: 5px;
    background-color: map-get($color, 'black');
    border-radius: 5px;
    margin: 5px $zero-number;
    transition: 0.4s;
  }
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-8px, 5px);
  transform: rotate(-45deg) translate(-8px, 5px);
}

.change .bar2 { opacity: $zero-number; }

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

@media screen and (min-width: 280px) and (max-width: 540px) {
  .navbar-hamburger-menu {
      display: inline-block;
  }
}

</style>