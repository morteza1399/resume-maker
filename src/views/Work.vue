<template>
  <Records :show_data="work"></Records>
</template>

<script>

import Records from '../components/Records.vue'
import { mapState } from 'vuex'

export default {
  name: 'Work',
  components: {
    Records
  },
  computed: {
    ...mapState(['work'])
  }
}

</script>