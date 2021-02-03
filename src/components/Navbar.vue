<template>
  <nav>
    <div class="hide-show">
      <h2> {{ navbar.title }} </h2>
    </div>
    <ul id="menu">
      <li v-for="(item, index) in navbar.menu" :key="index">
        <router-link :to="item.path" :class="{'link-success': item.success}">
          <span :class="{'number-active': $route.path === item.path,
          'number': $route.path !== item.path, 
          'number-success': item.success
          }"> {{ item.id }} </span>
          {{ item.title }} 
        </router-link>
      </li>
    </ul>
    <HamburgerMenu></HamburgerMenu>
  </nav>
</template>

<script>

import { mapState } from 'vuex'
import HamburgerMenu from '../components/HamburgerMenu.vue'

export default {
  name: 'Navbar',
  components: {
    HamburgerMenu
  },
  computed: {
    ...mapState(['navbar', 'home'])
  }
}
</script>

<style lang="scss" scoped>

nav {
  border-bottom: 2px solid map-get($color, 'gray-light');
  
  .hide-show {
    display: none;
  }

  ul {
    @include flex-row-center-center;
    flex-wrap: initial;
    margin: $zero-number;
    padding: 10px $zero-number;

    li {
      list-style: none;
      margin: $zero-number 30px;

      a {
        @include flex-row-center-center;
        color: map-get($color, 'gray');
        text-decoration: none;

        .number {
          @include steps-number;
          background-color: map-get($color, 'gray');
        }

        .number-active {
          @include steps-number;
          background-color: map-get($color, 'blue');
        }

        .number-success {
          background-color: map-get($color, 'green');
        }

        &.router-link-exact-active {
          color: map-get($color, 'blue');
        }
      }

      .link-success {
        color: map-get($color, 'green');

        &.router-link-exact-active {
          color: map-get($color, 'green');
        }
      }
    }
  }
}

@media screen and (max-width: 1024px){
  nav {
    ul {
      li {
        display: flex;
        @include list-responsive;

        a {
          font-size: 14px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px){
  nav {
    ul {
      li {
        display: flex;
      }
    }
  }
}

@media screen and (min-width: 280px) and (max-width: 540px) {  
  nav {
    @include flex-row;
    justify-content: space-around;
    align-items: $center;

    .hide-show {
      display: flex!important;
    }

    ul {
      display: none;
    }

    .show-menu {
      @include flex-column-center-center;
      @include zero-left-right;
      @include zero-padding-margin;
      top: 82px;
      background-color: map-get($color, 'white-light');
      z-index: 1000;
      border-top: none!important;
      border: 2px solid map-get($color, 'gray-light');
      border-radius: $zero-number $zero-number 5px 5px;

      li {
        text-align: right;

        a {
          justify-content: flex-start;
          font-size: 14px;
          margin: $zero-number;
          padding: $zero-number 10px;
        }
      }
    }
  }
}

</style>