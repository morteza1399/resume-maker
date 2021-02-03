<template>
  <section class="record-parent">
    <form action="#">
      <fieldset class="fieldset" 
      :class="{'success': isSuccessEducational && $route.path === '/educational' || isSuccessWork && $route.path === '/work'}">
        <legend class="legend"> {{ show_data.title }} </legend>
        <div class="box">
          <div class="records">
            <div class="records-box" v-for="(item, index) in show_data.firstRecord" :key="index">
              <label :for="item.id"> {{ item.label }} </label>
              <div v-if="item.id === 'grade' || item.id === 'company-name'">
                <input autocomplete="off" :type="item.type" :name="item.id" :id="item.id" v-model="item.model"
                :class="{'success': item.model}" 
                @change="grade_companyName(item.model)">
              </div>
              <div v-else-if="item.id === 'field' || item.id === 'company-location'">
                <input autocomplete="off" :type="item.type" :name="item.id" :id="item.id" v-model="item.model" 
                :class="{'success': item.model}"
                @change="field_companyLocation(item.model)">
              </div>
              <div v-else>
                <input autocomplete="off" :type="item.type" :name="item.id" :id="item.id" v-model="item.model" 
                :class="{'success': item.model}"
                @change="orientation_companyType(item.model)">
              </div>
              <small v-if="!item.model"> {{ item.error }} </small>
            </div>
          </div>
          <div class="records">
            <div class="records-box" v-for="(item, index) in show_data.secondRecord" :key="index">
              <label :for="item.id"> {{ item.label }} </label>
              <div v-if="item.id === 'university' || item.id === 'job-title'">
                <input autocomplete="off" :type="item.type" :name="item.id" :id="item.id" v-model="item.model"
                :class="{'success': item.model}"
                @change="university_jobTitle(item.model)">
              </div>
              <div v-else-if="item.id === 'start-date'">
                <input autocomplete="off" :type="item.type" :name="item.id" :id="item.id" v-model="item.model"
                :class="{'date': item.type === 'date', 'success': item.model}"
                @change="updateStartDate(item.model)">
              </div>
              <div v-else>
                <input autocomplete="off" :type="item.type" :name="item.id" :id="item.id" v-model="item.model"
                :class="{'date': item.type === 'date', 'success': item.model}"
                @change="updateEndDate(item.model)">
              </div>
              <small v-if="!item.model"> {{ item.error }} </small>
            </div>
          </div>
          <Navigation></Navigation>
        </div>
      </fieldset>
    </form>
  </section>
</template>

<script>

import Navigation from '../components/Navigation.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Records',
  computed: {
    ...mapGetters(['isSuccessEducational', 'isSuccessWork'])
  },
  components: {
    Navigation
  },
  props: {
    show_data: Object
  },
  methods: {
    ...mapMutations([
      'grade_companyName',
      'field_companyLocation', 
      'orientation_companyType', 
      'university_jobTitle', 
      'updateStartDate', 
      'updateEndDate'])
  }
}
</script>

<style lang="scss" scoped>

.record-parent {
  padding: 30px $zero-number $zero-number $zero-number;
  height: 83vh;

  form {
    @include form;

    .fieldset {
      @include fieldset;

      .legend {
        @include legend;
      }

      .box {
        @include flex-column-center;

        .records {
          @include flex-row;
          padding: 10px $zero-number;
          margin: $zero-number auto;

          .records-box {
            @include flex-column;

            label {
              @include label;
            }

            input {
              @include input-textarea;
              height: 30px;
            }

            .success {
              border: 2px solid map-get($color, 'green');
            }

            .date {
              width: 160px;
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

@media screen and (max-width: 280px) {
  .record-parent {
    form {
      .fieldset {
        padding: $zero-number 5px;
      }
    }
  }
}

@media screen and (min-width: 280px) and (max-width: 540px) {
  .record-parent {
    overflow: hidden;
    height: auto!important;

    form {
      @include form-mobile;

      .fieldset {
        @include fieldset-mobile;

        .box {
          .records {
            @include flex-column;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) and (max-height: 1024px) {
  .record-parent {
    height: 58vh;

    form {
      width: 100%;

      .fieldset {
        width: 60%;
        margin: $zero-number auto;
        font-size: 14px;
      }
    }
  }
}


@media screen and (min-width: 375px) and (max-width: 414px) and (min-height: 736px) and (max-height: 823px) {
  .record-parent {
    height: 105vh!important;
  }
}

</style>