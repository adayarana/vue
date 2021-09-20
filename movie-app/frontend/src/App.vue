<template>
  <div class="container">
    <Header
    title="MovieApp"
    @toggleCreateMovie="toggleCreateMovie"
    :showCreateMovie="showCreateMovie"
    />
    <div v-if="showCreateMovie">
    <CreateMovie @addMovie="addMovie" />
    </div>
    <Movies
    @deleteMovie="deleteMovie"
    @handleFavourite="handleFavourite"
    :movies="movies"
    />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue';
import Movies from './components/Movies.vue';
import CreateMovie from './components/CreateMovie.vue';

export default {
  name: 'App',
  components: {
    Header,
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

<style lang="scss">
@import './sass/var.scss';

* {
  font-family: 'IBM Plex Sans', sans-serif;
  background: $secondary;
  color: $primary;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  padding: 30px;
  text-align: center;
}

button {
    all: unset;
    color: $secondary;
    border: 2px solid;
    cursor: pointer;
    text-align: center;
    background: $accent;
    width: 100px;
    height: 33px;
    border-radius: 50em;
    transition: background linear 1s;
    box-shadow: 1px 0.5px 0.5px 0.5px $accent;
}

button:hover {
  background: $accent-hover;
}

input {
    cursor: pointer;
    border-radius: 15%;
    border: 1.5px solid $primary;
    width: 100px;
    height: 30px;
    outline: none;
    text-align: center;
    transition: background linear 1s;
    margin: 0.5rem;
    padding: 0.25rem;
  }

input:hover {
    background: $primary;
    color: $secondary;
  }

input:focus {
    border: 3px solid $primary;
  }

label {
  margin: 0.5rem;
  padding: 0.25rem;
}
</style>
