<template>
<div>
   <!-- <button @click="$emit('toggleCreateMovie')">
        {{ showCreateMovie ? 'Close' : 'Add Movie' }}
   </button> -->
<div
v-for="(movie, index) in movies"
:key="index"
>
  <h3>
    {{ movie.title }}
    <em @click="deleteMovie(movie.id)" class="fas fa-trash"></em>
    <em @click="$emit('toggleEditMovie')" class="fas fa-pencil-alt"></em>
  </h3>
  <h4>{{ movie.year }}</h4>
  <h4>{{ movie.score }}</h4>
  <p @click="handleFavouriteMovie(movie.id)">
  <em :class="[movie.favourite === true ? 'fas fa-star' : 'far fa-star']"></em>
  </p>
</div>
<div v-if="movies.length > 1">
  <button @click="deleteAllMovies">Delete All</button>
</div>
<div v-else-if="movies.length === 0">
  <p>No movies yet</p>
</div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Movies',
  props: {
    editMovie: Boolean
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
    ])
  },
  emits: ['toggleEditMovie']
};
</script>

<style lang="scss" scoped>
@import '../sass/var.scss';

* {
  margin: 0.25rem;
}

div {
    margin: 5px;
    padding: 10px 20px;
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

</style>
