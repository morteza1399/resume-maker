import { createStore } from 'vuex';
import router from '../router/index'

export default createStore({
  state: {
    navbar: {  // for navbar component
      title: 'رزومه ساز',
      menu: [
        {
          id: 1,
          title: 'مشخصات فردی',
          path: '/',
          success: false
        },
        {
          id: 2,
          title: 'سوابق تحصیلی',
          path: '/educational',
          success: false
        },
        {
          id: 3,
          title: 'سوابق شغلی',
          path: '/work',
          success: false
        },
        {
          id: 4,
          title: 'مهارت ها',
          path: '/skills',
          success: false
        },
        {
          id: 5,
          title: 'نمایش رزومه',
          path: '/viewprofile',
          success: false
        }
      ]
    },
    home: {  // for Home component
      title: 'مشخصات فردی',
      personal: {
        title: 'مشخصات',
        fullname: [
          {
            id: 'name',
            label: 'نام : ',
            type: 'text',
            error: '',
            model: ''
          },
          {
            id: 'family',
            label: 'فامیلی : ',
            type: 'text',
            error: '',
            model: ''
          }
        ],
        email: {
          id: 'email',
          label: 'ایمیل : ',
          error: '',
          model: '',
          reqular: /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/i
        }
      },
      contactus: {
        title: 'تماس',
        contact: [
          {
            id: 'phone',
            label: 'شماره موبایل : ',
            type: 'tel',
            error: '',
            model: '',
            reqular: /^(\+98|0)?9\d{9}$/
          },
          {
            id: 'address',
            label: 'آدرس : ',
            col: 30,
            row: 10,
            error: '',
            model: ''
          }
        ]
      },
      button: 'ثبت و ادامه'
    },
    educational: {  // for Educational component
      title: 'سوابق تحصیلی',
      firstRecord: [
        {
          id: 'grade',
          label: 'مقطع تحصیلی : ',
          type: 'text',
          error: '',
          model: ''
        }, 
        {
          id: 'field',
          label: 'رشته تحصیلی : ',
          type: 'text',
          error: '',
          model: ''
        }, 
        {
          id: 'orientation',
          label: 'گرایش تحصیلی : ',
          type: 'text',
          error: '',
          model: ''
        },
      ],
      secondRecord: [
        {
          id: 'university',
          label: 'نام دانشگاه : ',
          type: 'text',
          error: '',
          model: ''
        },
        {
          id: 'start-date',
          label: 'تاریخ شروع : ',
          type: 'date',
          error: '',
          model: ''
        },
        {
          id: 'end-date',
          label: 'تاریخ پایان : ',
          type: 'date',
          error: '',
          model: ''
        }
      ]
    },
    work: {  // for Work component
      title: 'سوابق شغلی',
      firstRecord: [
        {
          id: 'company-name',
          label: 'نام شرکت : ',
          type: 'text',
          error: '',
          model: ''
        },
        {
          id: 'company-location',
          label: 'محل شرکت : ',
          type: 'text',
          error: '',
          model: ''
        },
        {
          id: 'company-type',
          label: 'نوع شرکت : ',
          type: 'text',
          error: '',
          model: ''
        }
      ],
      secondRecord: [
        {
          id: 'job-title',
          label: 'سمت : ',
          type: 'text',
          error: '',
          model: ''
        },
        {
          id: 'start-date',
          label: 'تاریخ شروع : ',
          type: 'date',
          error: '',
          model: ''
        },
        {
          id: 'end-date',
          label: 'تاریخ پایان : ',
          type: 'date',
          error: '',
          model: ''
        }
      ]
    }, 
    navigation: [  // for Navigation component
      {
        image: 'arrow-left.png',
        title: 'arrow-right'
      },
      {
        image: 'plus.png',
        title: 'plus'
      },
      {
        image: 'arrow-left.png',
        title: 'arrow-left'
      }
    ],
    skills: {  // for Skills component
      title: 'مهارت ها',
      setSkills: [
        {
          id: 'skill-name',
          label: 'مهارت :',
          type: 'text',
          error: '',
          model: ''
        },
        {
          id: 'ability-level',
          label: 'سطح توانایی :',
          type: 'text',
          error: '',
          model: ''
        }
      ],
      level: ['ضعیف', 'متوسط', 'خوب', 'عالی'],
      result_skill: [],
      result_ability: []
    },
    viewprofile: {  // for Viewprofile component
      resume_title: 'نمایش رزومه',
      personal_title: 'مشخصات فردی',
      educational_title: 'سوابق تحصیلی',
      contact_title: 'اطلاعات تماس',
      work_title: 'سوابق شغلی',
      skill_title: 'مهارت ها'
    }
  },
  getters: {
    homeSuccessfull: state => {  // for Navbar component
      return state.navbar.menu.find(item => item.id === 1);
    },
    educationalSuccessfull: state => {
      return state.navbar.menu.find(item => item.id === 2);
    },
    workSuccessfull: state => {
      return state.navbar.menu.find(item => item.id === 3);
    },
    skillsSuccessfull: state => {
      return state.navbar.menu.find(item => item.id === 4);
    },
    profileSuccessfull: state => {
      return state.navbar.menu.find(item => item.id === 5);
    },
    name: state => {  // for Home component
      return state.home.personal.fullname.find(item => item.id === 'name');
    },
    family: state => {
      return state.home.personal.fullname.find(item => item.id === 'family');
    },
    email: state => {
      return state.home.personal.email;
    },
    phone: state => {
      return state.home.contactus.contact.find(item => item.id === 'phone');
    },
    address: state => {
      return state.home.contactus.contact.find(item => item.id === 'address');
    },
    isSuccessHome: (state, getters) => {
      return getters.name.model &&
      getters.family.model &&
      getters.email.model &&
      getters.email.reqular.test(getters.email.model) &&
      getters.phone.model &&
      getters.phone.reqular.test(getters.phone.model) &&
      getters.address.model;
    },
    isErrorHome: (state, getters) => {
      return !getters.name.model ||
      !getters.family.model ||
      !getters.email.model || 
      !getters.phone.model || 
      !getters.address.model;
    },
    grade: state => {  // for Educational component
      return state.educational.firstRecord.find(item => item.id === 'grade');
    },
    field: state => {
      return state.educational.firstRecord.find(item => item.id === 'field');
    },
    orientation: state => {
      return state.educational.firstRecord.find(item => item.id === 'orientation');
    },
    university: state => {
      return state.educational.secondRecord.find(item => item.id === 'university');
    },
    universityStartDate: state => {
      return state.educational.secondRecord.find(item => item.id === 'start-date');
    },
    universityEndDate: state => {
      return state.educational.secondRecord.find(item => item.id === 'end-date');
    },
    isSuccessEducational: (state, getters) => {
      return getters.grade.model &&
      getters.field.model &&
      getters.orientation.model &&
      getters.university.model &&
      getters.universityStartDate.model && 
      getters.universityEndDate.model;
    },
    isErrorEducational: (state, getters) => {
      return !getters.grade.model || 
      !getters.field.model || 
      !getters.orientation.model ||
      !getters.university.model ||
      !getters.universityStartDate.model ||
      !getters.universityEndDate.model;
    },
    companyName: state => {  // for Work component
      return state.work.firstRecord.find(item => item.id === 'company-name');
    },
    companyLocation: state => {
      return state.work.firstRecord.find(item => item.id === 'company-location');
    },
    companyType: state => {
      return state.work.firstRecord.find(item => item.id === 'company-type');
    },
    jobTitle: state => {
      return state.work.secondRecord.find(item => item.id === 'job-title');
    },
    companyStartDate: state => {
      return state.work.secondRecord.find(item => item.id === 'start-date');
    },
    companyEndDate: state => {
      return state.work.secondRecord.find(item => item.id === 'end-date');
    },
    isSuccessWork: (state, getters) => {
      return getters.companyName.model &&
      getters.companyLocation.model &&
      getters.companyType.model &&
      getters.jobTitle.model && 
      getters.companyStartDate.model && 
      getters.companyEndDate.model;
    },
    isErrorWork: (state, getters) => {
      return !getters.companyName.model ||
      !getters.companyLocation.model ||
      !getters.companyType.model ||
      !getters.jobTitle.model ||
      !getters.companyStartDate.model ||
      !getters.companyEndDate.model;
    },
    skillName: state => {  // for Skills component
      return state.skills.setSkills.find(item => item.id === 'skill-name');
    },
    abilityLevel: state => {
      return state.skills.setSkills.find(item => item.id === 'ability-level');
    },
    isSuccessSkills: (state, getters) => {
      return getters.skillName.model && getters.abilityLevel.model;
    },
    isErrorSkills: (state, getters) => {
      return !getters.skillName.model || !getters.abilityLevel.model;
    },
    fullName: (state, getters) => {  // for Viewprofile component
      return getters.name.model + ' ' + getters.family.model;
    },
    degree: (state, getters) => {
      return getters.grade.model + ' ' + getters.field.model + ' ' + getters.orientation.model
    }
  },
  mutations: {
    hambur() {  // for navbar component
      let hamburger = document.getElementById('hamburger-menu');
      let menu = document.getElementById('menu');
      hamburger.classList.toggle('change');
      menu.classList.toggle('show-menu');
    },
    name(state, newName) {  // for home component
      this.getters.name.model = newName;
    },
    family(state, newFamily) {
      this.getters.family.model = newFamily;
    },
    email(state, newEmail) {  
      this.getters.email.model = newEmail;
      if (this.getters.email.reqular.test(newEmail)) {
        this.getters.email.error = '';
      }
      else {
        this.getters.email.error = 'ایمیل را با فرمت درست وارد کنید';
      }
    },
    phone(state, newPhone) {
      this.getters.phone.model = newPhone;
      if (this.getters.phone.reqular.test(this.getters.phone.model)) {
        this.getters.phone.error = '';
      }
      else {
        this.getters.phone.error = 'شماره موبایل را با فرمت درست وارد کنید';
      }
    },
    address(state, newAddress) {
      this.getters.address.model = newAddress;
    },
    goToEducational() {
      if ( this.getters.isSuccessHome) {
        this.getters.homeSuccessfull.success = true;
        router.push({path: '/educational'});
      } else if (this.getters.isErrorHome) {
        this.getters.name.error = 'نام را وارد کنید';
        this.getters.family.error = 'فامیلی را وارد کنید';
        this.getters.email.error = 'ایمیل را با فرمت درست وارد کنید';
        this.getters.phone.error = 'شماره موبایل را با فرمت درست وارد کنید';
        this.getters.address.error = 'آدرس را وارد کنید';
      }
    },
    grade_companyName(state, new_grade_companyName) {  // for Educational and Work component
      if (router.currentRoute.value.path === '/educational') {
        this.getters.grade.model = new_grade_companyName;
      } else if (router.currentRoute.value.path === '/work') {
        this.getters.companyName.model = new_grade_companyName;
      }
    },
    field_companyLocation(state, new_field_companyLocation) {
      if (router.currentRoute.value.path === '/educational') {
        this.getters.field.model = new_field_companyLocation;
      } else if (router.currentRoute.value.path === '/work') {
        this.getters.companyLocation.model = new_field_companyLocation;
      }
    },
    orientation_companyType(state, new_orientation_companyType) {
      if (router.currentRoute.value.path === '/educational') {
        this.getters.orientation.model = new_orientation_companyType
      } else if (router.currentRoute.value.path === '/work') {
        this.getters.companyType.model = new_orientation_companyType;
      }
    },
    university_jobTitle(state, new_university_jobTitle) {
      if (router.currentRoute.value.path === '/educational') {
        this.getters.university.model = new_university_jobTitle;
      } else if (router.currentRoute.value.path === '/work') {
        this.getters.jobTitle.model = new_university_jobTitle;
      }
    },
    updateStartDate(state, newStartDate) {
      if (router.currentRoute.value.path === '/educational') {
        this.getters.universityStartDate.model = newStartDate;
      } else if (router.currentRoute.value.path === '/work') {
        this.getters.companyStartDate.model = newStartDate;
      }
    },
    updateEndDate(state, newEndDate) {
      if (router.currentRoute.value.path === '/educational') {
        this.getters.universityEndDate.model = newEndDate;
      } else if (router.currentRoute.value.path === '/work') {
        this.getters.companyEndDate.model = newEndDate;
      }
    },
    goBackHome() {
      router.push({path: '/'});
      this.getters.homeSuccessfull.success = false;
    },
    goBackEducational() {
      router.push({path: '/educational'});
      this.getters.educationalSuccessfull.success = false;
    },
    goToWork() {
      if (this.getters.isSuccessEducational) {
        this.getters.educationalSuccessfull.success = true;
        router.push({path: '/work'});
      } else if (this.getters.isErrorEducational) {
        this.getters.grade.error = 'مقطع تحصیلی را وارد کنید';
        this.getters.field.error = 'رشته تحصیلی را وارد کنید';
        this.getters.orientation.error = 'گرایش تحصیلی را وارد کنید';
        this.getters.university.error = 'نام دانشگاه را وارد کنید';
        this.getters.universityStartDate.error = 'تاریخ شروع را وارد کنید';
        this.getters.universityEndDate.error = 'تاریخ پایان را وارد کنید'
      }
    },
    goToSkills() {
      if (this.getters.isSuccessWork) {
        this.getters.workSuccessfull.success = true;
        router.push({path: '/skills'});
      } else if (this.getters.isErrorWork) {
        this.getters.companyName.error = 'نام شرکت را وارد کنید';
        this.getters.companyLocation.error = 'محل شرکت را وارد کنید';
        this.getters.companyType.error = 'نوع شرکت را وارد کنید';
        this.getters.jobTitle.error = 'عنوان شغلی را وارد کنید';
        this.getters.companyStartDate.error = 'تاریخ شروع را وارد کنید';
        this.getters.companyEndDate.error = 'تاریخ پایان را وارد کنید';
      }
    },
    goBackWork() {  // for Skills component
      router.push({path: '/work'});
      this.getters.workSuccessfull.success = false;
    },
    updateSkills(state, newSkillName) {  
      this.getters.skillName.model = newSkillName;
      state.skills.result_skill.push(this.getters.skillName.model);
    },
    updateAbilityLevel(state, newAbilityLevel) {
      this.getters.abilityLevel.model = newAbilityLevel;
      state.skills.result_ability.push(this.getters.abilityLevel.model);
    },
    plus(state) {
      let box = document.getElementById('box');
      let parent = document.createElement('div');
      state.skills.setSkills.forEach((item, index) => {
        let child = document.createElement('div');
        let label = document.createElement('label');
        let input = document.createElement('input');
        let select = document.createElement('select');
        let small = document.createElement('small');
        state.skills.level.forEach((item) => {
          let option = document.createElement('option');
          option.innerHTML = item;
          select.append(option);
          select.value = '';
        })
        label.innerHTML = item.label;
        label.htmlFor = item.id;
        input.autocomplete = 'off';
        input.type = item.type;
        input.name = item.id;
        input.id = item.id;
        select.name = item.id;
        select.id = item.id;
        child.append(label);
        if (index !== state.skills.setSkills.length - 1) {
          child.append(input);
          small.innerHTML = 'مهارت را وارد کنید';
        }
        if (index === state.skills.setSkills.length - 1) {
          child.append(select);
          small.innerHTML = 'سطح توانایی را وارد کنید';
        }
        child.append(small);
        parent.append(child);
        box.append(parent);
        parent.classList.add('skills');
        child.classList.add('skills-box');
        input.addEventListener('change', function() {
          if (this.value) {
            this.style.border = '2px solid #008800';
            state.skills.result_skill.push(this.value);
            small.remove();
          }
        });
        select.addEventListener('change', function() {
          if (this.value) {
            this.style.border = '2px solid #008800';
            state.skills.result_ability.push(this.value);
            small.remove();
          }
        });
      });
    },
    goToProfile() {
      if (this.getters.isSuccessSkills) {
        this.getters.skillsSuccessfull.success = true;
        router.push({path: '/viewprofile'});
        this.getters.profileSuccessfull.success = true;
      } else if (this.getters.isErrorSkills) {
        this.getters.skillName.error = 'مهارت را وارد کنید';
        this.getters.abilityLevel.error = 'سطح توانایی را وارد کنید';
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
