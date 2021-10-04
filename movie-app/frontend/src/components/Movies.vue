<template>
  <div class="movies-container">
    <div class="movies-container__component">
      <div v-if="editMovie">
        <UpdateMovie :movie="movie" />
      </div>
      <div v-else>
        <CreateMovie />
      </div>
      <div v-if="movies.length > 1">
      <button @click="deleteAllMovies">Delete All</button>
    </div>
    <div v-else-if="movies.length === 0">
      <p>No movies yet</p>
    </div>
    </div>
    <div class="movies-container__movies">
      <div
      class="movies__information"
      v-for="(movie, index) in movies"
      :key="index"
      >
        <h3>
          {{ movie.title }}
          <em @click="deleteMovie(movie.id)" class="fas fa-trash"></em>
          <em @click="toggleEditMovie(movie)" class="fas fa-pencil-alt"></em>
        </h3>
        <h4>{{ movie.year }}</h4>
        <h4>{{ movie.score }}</h4>
        <p @click="handleFavouriteMovie(movie)">
        <em :class="[movie.favourite === true ? 'fas fa-star' : 'far fa-star']"></em>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import CreateMovie from './CreateMovie.vue';
import UpdateMovie from './UpdateMovie.vue';

export default {
  name: 'Movies',
  components: {
    CreateMovie,
    UpdateMovie
  },
  data() {
    return {
      movie: {
        type: Object,
        default: {
          id: '',
          title: '',
          year: '',
          score: '',
          favourite: false
        }
      },
      editMovie: false
    };
  },
  computed: {
    ...mapState([
      'movies'
    ])
  },
  methods: {
    ...mapActions([
      'deleteMovie',
      'deleteAllMovies',
      'handleFavouriteMovie'
    ]),
    toggleEditMovie(movie) {
      this.editMovie = !this.editMovie;
      this.movie = movie;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../sass/var.scss';

.movies-container {
  margin: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .movies-container__component {

    button {
      width: 100px;
      margin: 0.5rem;
    }

  }

  .movies-container__movies {
    margin: 0.5rem;
    padding: 0.5rem;

    .movies__information, h3, h4, p {
      margin: 0.1rem;
      padding: 0.1rem;
    }

    em {
      margin: 0.2rem;
      padding: 0.2rem;
    }

    .fas, .far {
      color: $alternative;
    }

    .fas:hover, .far:hover {
      transform: scale(1.3) rotate(0.5turn);
      transition: 1s;
    }

    .fa-star {
      cursor: pointer;
      color: $accent;
    }
  }
}

@media screen and (min-width: 415px) {
  .movies-container__movies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}

</style>
