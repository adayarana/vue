<template>
  <div class="filmography">
    <CreateMovie
    v-if="showCreateMovie"
    @addMovie="addMovie"
    />
    <Movies
    @toggleCreateMovie="toggleCreateMovie"
    :showCreateMovie="showCreateMovie"
    @deleteMovie="deleteMovie"
    @handleFavourite="handleFavourite"
    :movies="movies"
    />
  </div>
</template>

<script>
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
      movies: {
        type: Array,
        default: []
      },
      showCreateMovie: false
    };
  },
  methods: {
    addMovie(newMovie) {
      this.movies = [...this.movies, newMovie];
    },
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
    },
    async fetchMovies() {
      const res = await fetch('http://localhost:5000/movie-app/favourites');

      const data = await res.json();

      return data;
    }
  },
  async created() {
    this.movies = await this.fetchMovies();
  }
};
</script>
