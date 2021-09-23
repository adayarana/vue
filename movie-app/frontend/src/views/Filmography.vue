<template>
  <div class="filmography">
    <CreateMovie
    v-if="showCreateMovie"
    />
    <Movies
    @toggleCreateMovie="toggleCreateMovie"
    :showCreateMovie="showCreateMovie"
    @deleteMovie="deleteMovie"
    @handleFavourite="handleFavourite"
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
    },
    deleteMovie(id) {
      if (confirm('Are you sure?')) {
        this.movies = this.movies.filter((movie) => movie.id !== id);
        console.log('movie', id);
      }
    },
    handleFavourite(id) {
      this.movies = this.movies.map((movie) => (movie.id === id ? {
        ...movie,
        favourite: !movie.favourite
      } : movie));
    }
  },
  mounted() {
    this.getAllMovies();
  }
};
</script>
