<template>
  <Records :show_data="educational"></Records>
</template>

<script>

import Records from '../components/Records.vue'
import { mapState } from 'vuex'

export default {
  name: 'Educational',
  components: {
    Records
  },
  computed: {
    ...mapState(['educational'])
  }
}
</script>