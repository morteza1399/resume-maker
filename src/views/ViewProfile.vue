<template>
  <section class="show-profile" :class="{'profile': isSuccessHome && isSuccessEducational && isSuccessWork && isSuccessSkills}">
    <form action="#">
      <fieldset class="fieldset" :class="{'success': isSuccessHome && isSuccessEducational && isSuccessWork && isSuccessSkills}">
        <legend class="legend"> {{ viewprofile.resume_title }} </legend>
        <div class="box" v-if="isSuccessHome && isSuccessEducational && isSuccessWork && isSuccessSkills">
          <div class="resume">
            <div class="resume-box">
              <h2 class="resume-title"> {{ viewprofile.personal_title }} </h2>
              <p class="resume-text"> {{ fullName }} </p>
              <small class="job-title-date"> {{ jobTitle.model }} </small>    
            </div>
            <div class="resume-box">
              <h2 class="resume-title"> {{ viewprofile.educational_title }} </h2>
              <p class="resume-text"> {{ degree }} </p>
              <p class="resume-text"> {{ university.model }} </p>
              <small class="job-title-date"> {{ universityStartDate.model }} </small><br>
              <small class="job-title-date"> {{ universityEndDate.model }} </small>
            </div>
          </div>
          <div class="resume">
            <div class="resume-box">
              <h2 class="resume-title"> {{ viewprofile.contact_title }} </h2>
              <div class="contact">
                <img src="../assets/image/email.png" alt="" width="30" height="30">
                <small> {{ email.model }} </small>
              </div>
              <div class="contact">
                <img src="../assets/image/phone.png" alt="" width="30" height="30">
                <small> {{ phone.model }} </small>
              </div>
              <div class="contact">
                <img src="../assets/image/location.png" alt="" width="30" height="30">
                <p> {{ address.model }} </p>
              </div>
            </div>
            <div class="resume-box">
              <h2 class="resume-title"> {{ viewprofile.work_title }} </h2>
              <p class="resume-text"> {{ jobTitle.model }} </p>
              <p class="resume-text"> {{ companyName.model }} </p>
              <small class="job-title-date"> {{ companyStartDate.model }} </small><br>
              <small class="job-title-date"> {{ companyEndDate.model }} </small>
            </div>
          </div>
          <div class="resume">
            <div class="resume-box">
              <h2 class="resume-title is-center"> {{ viewprofile.skill_title }} </h2>
              <div class="skill-box">
                <div>
                  <p v-for="(item, index) in skills.result_skill" :key="index"> {{ item }} </p>
                </div>
                <div>
                  <p v-for="(item, index) in skills.result_ability" :key="index"> {{ item }} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </section>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ViewProfile',
  computed: {
    ...mapState(['home', 'educational', 'work', 'skills', 'viewprofile']),
    ...mapGetters([
      'isSuccessHome', 
      'isSuccessEducational', 
      'isSuccessWork', 
      'isSuccessSkills', 
      'fullName', 
      'jobTitle',
      'email',
      'phone',
      'address',
      'degree',
      'university',
      'universityStartDate',
      'universityEndDate',
      'companyName',
      'companyStartDate',
      'companyEndDate'
      ])
  }
}
</script>

<style lang="scss" scoped>

.profile {
  height: auto!important;
}

.show-profile {
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

        .resume {
          @include flex-row;

          .resume-box {
            width: 100%;
            margin: $zero-number 10px;
            padding: 5px;

            .resume-title {
              background-color: map-get($color, 'green');
              color: map-get($color, 'white');
              padding: 10px;
              border-radius: 10px $zero-number;
              font-size: 20px;
            }

            .resume-text {
              margin: 15px;
            }

            .is-center {
              text-align: $center
            }

            .contact {
              @include flex-row;
              align-items: $center;
              margin: 5px auto;
              
              small, p {
                margin: $zero-number 10px;
              }

              img {
                background-color: map-get($color, 'green');
                border-radius: 50%;
                padding: 10px;
              }
            }

            .job-title-date {
              color: map-get($color, 'green');
              margin: 15px;
            }

            .skill-box {
              @include flex-row;
              justify-content: space-around;
              overflow-y: scroll;
              height: 150px;

              &::-webkit-scrollbar {
                display: none;
              }
            }

            .skill-box {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          }
        }
      }
    }

    .success {
      border: 2px solid map-get($color, 'green');

      .legend {
        background-color: map-get($color, 'green');
      }
    }
  }
}

@media screen and (max-width: 280px) {
  .profile {
    form {
      .fieldset {
        .box {
          font-size: 12px!important;
          .resume {
            .resume-box {
              .resume-title {
                font-size: 14px!important;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 280px) and (max-width: 768px) {
  .profile {
    overflow: hidden;
    height: auto!important;

    form {
      @include form-mobile;

      .fieldset {
        @include fieldset-mobile;

        .box {
          .resume {
            @include flex-column;

            .resume-box {
              @include zero-padding-margin;

              .resume-title {
                text-align: $center;
                font-size: 16px!important;
              }

              .contact {
                margin: 5px;
              }

              .resume-text, .job-title-date {
                padding: $zero-number 5px;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .profile {
    height: 130vh!important;
    font-size: 14px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1366px) {
  .profile {
    height: 105vh!important;
    font-size: 14px;
  }
}


@media screen and (min-width: 375px) and (max-width: 414px) and (min-height: 736px) and (max-height: 823px) {
  .profile {
    height: 142vh!important;
  }
}

</style>