<template>
  <section>
    <form action="#">
      <fieldset class="fieldset" :class="{'success': isSuccessSkills}">
        <legend class="legend"> {{ skills.title }} </legend>
        <div id="box" class="boxs">
          <div class="skills">
            <div class="skills-box" v-for="(item, index) in skills.setSkills" :key="index">
              <label :for="item.id"> {{ item.label }} </label>
              <input autocomplete="off" :type="item.type" :name="item.id" :id="item.id" v-model="item.model" 
              v-if="index !== skills.setSkills.length - 1"
              :class="{'success': item.model}"
              @change="updateSkills(item.model)">
              <select :name="item.id" :id="item.id" v-if="index === skills.setSkills.length - 1" v-model="item.model" 
              :class="{'success': item.model}"
              @change="updateAbilityLevel(item.model)">
                <option v-for="(item, index) in skills.level" :key="index" :value="item"> {{ item }} </option>
              </select>
              <small v-if="!item.model"> {{ item.error }} </small>
            </div>
          </div>
        </div>
        <Navigation></Navigation>
      </fieldset>
    </form>
  </section>
</template>

<script>

import Navigation from '../components/Navigation.vue'
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Skills',
  computed: {
    ...mapState(['skills']),
    ...mapGetters(['isSuccessSkills'])
  },
  components: {
    Navigation
  },
  methods: {
    ...mapMutations(['updateSkills', 'updateAbilityLevel'])
  }
}
</script>

<style lang="scss">

section {
  padding: 30px $zero-number;
  height: 79vh;
  
  form {
    @include form;

    .fieldset {
      @include fieldset;

      .legend {
        @include legend;
      }

      .boxs {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      .boxs {
        @include flex-column;
        overflow-y: scroll;
        height: 200px;
        padding: 20px $zero-number;

        &::-webkit-scrollbar {
          display: none;
        }
      
        .skills {
          @include flex-row;
          margin: $zero-number auto;

          .skills-box {
            @include flex-column;

            label {
              @include label;
            }

            select, input {
              @include input-textarea;
              height: 30px;
            }

            select {
              height: 45px;
              width: 23vh;
            }

            .success {
              border: 2px solid map-get($color, 'green');
            }

            small {
              @include small;
            }
          }
        }
      }
    }

    .success {
      &:focus-within {
        border: 2px solid map-get($color, 'green');

        .legend {
          background-color: map-get($color, 'green');
        }
      }
    }
  }
}

@media screen and (min-width: 280px) and (max-width: 540px) {
  section {
    overflow: hidden;
    height: 76vh!important;

    form {
      @include form-mobile;

      .fieldset {
        @include fieldset-mobile;

        .boxs {
          .skills {
            @include flex-column;

            .skills-box {
              select {
                width: 95%!important;
                margin: $zero-number auto;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) and (max-height: 1024px) {
  section {
    height: 55vh;

    form {
      width: 100%;

      .fieldset {
        width: 60%;
        margin: $zero-number auto;
        font-size: 14px;
        .box {
          .skills {
            .skills-box {
              select {
                width: 18vh;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 411px) and (min-height: 736px) and (max-height: 823px) {
  section {
    height: 68vh!important;
  }
}

</style>