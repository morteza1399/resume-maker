<template>
  <div class="navigation" :class="{'success': isSuccessEducational && $route.path === '/educational'}">
    <a href="#" v-for="(item, index) in navigation" :key="index" 
    :class="{'rotate': index === 0, 'hide': item.title === 'plus', 'show': item.title === 'plus' && $route.path === '/skills'}">
      <div v-if="item.title === 'arrow-right'">
        <div v-if="$route.path === '/educational'">
          <figure @click="goBackHome()">
            <img :src="require(`../assets/image/${item.image}`)" :alt="item.title" width="30" height="30">
          </figure>
        </div>
        <div v-else-if="$route.path === '/work'">
          <figure @click="goBackEducational()">
            <img :src="require(`../assets/image/${item.image}`)" :alt="item.title" width="30" height="30">
          </figure>
        </div>
        <div v-else-if="$route.path === '/skills'">
          <figure @click="goBackWork()">
            <img :src="require(`../assets/image/${item.image}`)" :alt="item.title" width="30" height="30">
          </figure>
        </div>
      </div>
      <div v-else-if="item.title === 'plus'">
        <figure @click.prevent="plus()">
          <img :src="require(`../assets/image/${item.image}`)" :alt="item.title" width="30" height="30">
        </figure>
      </div>
      <div v-else-if="item.title === 'arrow-left'">
        <div v-if="$route.path === '/educational'">
          <figure @click.prevent="goToWork()">
            <img :src="require(`../assets/image/${item.image}`)" :alt="item.title" width="30" height="30">
          </figure>
        </div>
        <div v-else-if="$route.path === '/work'">
          <figure @click.prevent="goToSkills()">
            <img :src="require(`../assets/image/${item.image}`)" :alt="item.title" width="30" height="30">
          </figure>
        </div>
        <div v-else-if="$route.path === '/skills'">
          <figure @click.prevent="goToProfile()">
            <img :src="require(`../assets/image/${item.image}`)" :alt="item.title" width="30" height="30">
          </figure>
        </div>
      </div>
    </a>
  </div>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Navigation',
  computed: {
    ...mapState(['navigation']),
    ...mapGetters(['isSuccessEducational'])
  },
  methods: {
    ...mapMutations(['goBackHome', 'goBackEducational', 'goBackWork', 'goToWork', 'goToSkills', 'plus', 'goToProfile'])
  }
}
</script>

<style lang="scss" scoped>

.navigation {
  @include flex-row;
  justify-content: space-around;
  align-items: $center;
  padding: 15px $zero-number;

  &:focus-within {
    border: none!important;
    a {
      outline: none;
      figure {
        background-color: map-get($color, 'blue');
      }
    }
  }

  a {
    figure {
      display: flex;
      background-color: map-get($color, 'gray');
      border-radius: 50%;
      padding: 10px;
    }
  }

  .rotate {
    transform: rotate(180deg);
  }

  .hide {
    display: none;
  } 

  .show {
    display: flex;
  }
}

.success {
  &:focus-within {
    a {
      figure {
        background-color: map-get($color, 'green');
      }
    }
  }
}

@media screen and (min-width: 280px) and (max-width: 540px) {
  .navigation {
    a {
      figure {
        margin: 30px $zero-number;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}

</style>