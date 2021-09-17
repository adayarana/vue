<template>
  <div class="container">
    <Header title="MovieApp"/>
    <CreateMovie @add-movie="addMovie" />
    <Movies @delete-movie="deleteMovie" @toggle="toggle" :movies="movies"/>
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
      }
    };
  },
  methods: {
    addMovie(newMovie) {
      this.movies = [...this.movies, newMovie];
    },
    deleteMovie(id) {
      if (confirm('Are you sure?')) {
        this.movies = this.movies.filter((movie) => movie.id !== id);
        console.log('movie', id);
      }
    },
    toggle(id) {
      this.movies = this.movies.map((movie) => (movie.id === id ? {
        ...movie,
        favourite: !movie.favourite
      } : movie));
    }
  },
  created() {
    this.movies = [
      {
        id: 0,
        title: 'The Matrix',
        year: 1999,
        score: 8.7,
        favourite: false
      },
      {
        id: 1,
        title: 'The Fight Club',
        year: 1999,
        score: 8.8,
        favourite: true
      }
    ];
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
