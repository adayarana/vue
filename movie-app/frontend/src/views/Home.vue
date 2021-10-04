<template>
  <div class="home">
    <Shows />
    <People />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Shows from '../components/Shows.vue';
import People from '../components/People.vue';

export default {
  name: 'Home',
  components: {
    Shows,
    People
  },
  computed: {
    ...mapState([
      'shows',
      'people'
    ])
  },
  methods: {
    ...mapActions([
      'getApiShows',
      'getApiPeople'
    ])
  },
  mounted() {
    this.getApiShows();
    this.getApiPeople();
  }
};
</script>
