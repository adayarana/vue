<template>
  <div class="container">
    <Header title="MovieApp"/>
    <Movies @delete-movie="deleteMovie" :movies="movies"/>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue';
import Movies from './components/Movies.vue';

export default {
  name: 'App',
  components: {
    Header,
    Movies
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
    deleteMovie(id) {
      console.log('movie', id);
    }
  },
  created() {
    this.movies = [
      {
        id: 0,
        title: 'The Matrix',
        year: 1999,
        score: 8.7
      },
      {
        id: 1,
        title: 'The Fight Club',
        year: 1999,
        score: 8.8
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
</style>
