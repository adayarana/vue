<template>
  <div class="filmography">
    <Movies />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Movies from '../components/Movies.vue';

export default {
  name: 'Filmography',
  components: {
    Movies
  },
  computed: {
    ...mapState([
      'movies'
    ])
  },
  methods: {
    ...mapActions([
      'getAllMovies'
    ])
  },
  mounted() {
    this.getAllMovies();
  }
};
</script>
