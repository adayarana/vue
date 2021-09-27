<template>
  <div class="filmography">
    <CreateMovie
    v-if="showCreateMovie"
    />
    <Movies
    @toggleCreateMovie="toggleCreateMovie"
    :showCreateMovie="showCreateMovie"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Movies from '../components/Movies.vue';
import CreateMovie from '../components/CreateMovie.vue';

export default {
  name: 'Filmography',
  components: {
    Movies,
    CreateMovie
  },
  data() {
    return {
      showCreateMovie: false
    };
  },
  computed: {
    ...mapState([
      'movies'
    ])
  },
  methods: {
    ...mapActions([
      'getAllMovies'
    ]),
    toggleCreateMovie() {
      this.showCreateMovie = !this.showCreateMovie;
    }
  },
  mounted() {
    this.getAllMovies();
  }
};
</script>
