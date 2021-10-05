<template>
  <div class="home">
    <Shows />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Shows from '../components/Shows.vue';

export default {
  name: 'Home',
  components: {
    Shows
  },
  computed: {
    ...mapState([
      'shows'
    ])
  },
  methods: {
    ...mapActions([
      'getApiShows'
    ])
  },
  mounted() {
    this.getApiShows();
  }
};
</script>
