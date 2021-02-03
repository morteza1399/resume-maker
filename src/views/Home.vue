<template>
  <section class="home">
    <form action="#" @submit.prevent="goToEducational()">
      <fieldset class="fieldset" :class="{'success': isSuccessHome}">
        <legend class="legend"> {{ home.title }} </legend>
        <div class="box">
          <div>
            <div>
              <h4> {{ home.personal.title }} </h4>
            </div>
            <div class="fullname">
              <div class="information-box" v-for="(item, index) in home.personal.fullname" :key="index"> 
                <label :for="item.id"> {{ item.label }} </label>
                <input autocomplete="off" :type="item.type" :id="item.id" :name="item.id" v-model="item.model" 
                :class="{'success': item.model}" 
                v-on="index !== home.personal.fullname.length - 1 ? { change: name(item.model) } : { change: family(item.model) }">
                <small v-if="!item.model"> {{ item.error }} </small>
              </div>
            </div>
            <div class="information-box">
              <label :for="home.personal.email.id"> {{ home.personal.email.label }} </label>
              <input autocomplete="off" :type="home.personal.email.id" :id="home.personal.email.id" :name="home.personal.email.id" v-model="email.model"
              :class="{'success': home.personal.email.reqular.test(home.personal.email.model)}"
              @change="email(email.model)">
              <small v-if="!home.personal.email.reqular.test(home.personal.email.model)"> {{ home.personal.email.error }} </small>
            </div>
            <br>
            <hr>
            <div>
              <h4> {{ home.contactus.title }} </h4>
            </div>
            <div class="information-box" v-for="(item, index) in home.contactus.contact" :key="index">
              <label :for="item.id"> {{ item.label }} </label>
              <input autocomplete="off" :type="item.type" :id="item.id" :name="item.id" v-if="index !== home.contactus.contact.length - 1"
              v-model="item.model" 
              :class="{'success': item.reqular.test(item.model)}"
              @change="phone(item.model)">
              <textarea :name="item.id" :id="item.id" :cols="item.col" :rows="item.row" v-if="index === home.contactus.contact.length - 1"
              v-model="item.model" 
              :class="{'success': item.model}"
              @change="address(item.model)"></textarea>
              <small v-if="index !== home.contactus.contact.length - 1"> {{ item.error }} </small>
              <small v-else-if="!item.model && index === home.contactus.contact.length - 1"> {{ item.error }} </small>
            </div>
            <button type="submit"> {{ home.button }} </button>
          </div>
        </div>
      </fieldset>
    </form>
  </section>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState(['home']),
    ...mapGetters(['isSuccessHome'])
  },
  methods: {
    ...mapMutations(['name', 'family', 'email', 'phone', 'address', 'goToEducational'])
  }
}
</script>

<style lang="scss" scoped>

.home {
  padding: 15px $zero-number $zero-number $zero-number;
  height: auto;

  form {
    @include form;

    .fieldset {
      @include fieldset;

      .legend {
        @include legend;
      }

      .box {
        @include flex-column-center-center;

        .fullname {
          @include flex-row;
        }

        .information-box {
          @include flex-column;

          label {
            @include label;
          }

          input, textarea {
            @include input-textarea;
          }

          .success {
            border: 2px solid map-get($color, 'green');
          }

          input {
            height: 30px;
          }

          small {
            @include small;
          }
        }

        hr {
          border: 2px solid map-get($color, 'gray-light');
        }

        button {
          @include button;
        }
      }
    }

    .success {
      &:focus-within {
        border: 2px solid map-get($color, 'green');

        .legend {
          background-color: map-get($color, 'green')
        }

        .box {
          button {
            background-color: map-get($color, 'green');    
          }
        }
      }
    }
  }
}

@media screen and (max-width: 280px) {
  form {
    .fieldset {
      width: 75%!important;
      margin: $zero-number auto!important;
      font-size: 12px;
    }
  }
}

@media screen and (min-width: 280px) and (max-width: 540px) {
  .home {
    overflow: hidden;
    height: auto!important;

    form {
      @include form-mobile;

      .fieldset {
        @include fieldset-mobile;

        .box {
          .fullname {
            @include flex-column;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1366px) {
  .home {
    height: 105vh;

    .fieldset {
      font-size: 14px;
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 414px) and (min-height: 736px) and (max-height: 823px) {
  .home {
    height: 120vh!important;
  }
}
</style>