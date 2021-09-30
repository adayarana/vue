<template>
<div>
  <h3>Update Movie</h3>
  <form
    @submit="onSubmit"
    action=""
    >
    <div>
        <label for="title">Title</label>
        <input
        id="title"
        name="title"
        v-model="this.movie.title"
        type="text"
        placeholder="Add Title"
        required
        >
    </div>
    <div>
        <label for="year">Year</label>
        <input
        id="year"
        name="year"
        v-model="this.movie.year"
        type="number"
        min="1900"
        max="2022"
        placeholder="Add Year"
        required
        >
    </div>
    <div>
        <label for="score">Score</label>
        <input
        id="score"
        name="score"
        v-model="this.movie.score"
        type="number"
        step=0.01
        min="0"
        max="10"
        placeholder="Add Score"
        required
        >
    </div>
    <div>
        <label for="favourite">Favourite</label>
        <input
        id="favourite"
        name="favourite"
        v-model="this.movie.favourite"
        type="checkbox"
        class="favourite"
        >
    </div>
    <input
    type="submit"
    value="Update"
    class="btn"
    >
</form>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UpdateMovie',
  props: {
    movie: Object
  },
  methods: {
    ...mapActions([
      'updateMovie'
    ]),
    onSubmit(e) {
      e.preventDefault();

      const newMovie = {
        title: this.title,
        year: this.year,
        score: this.score,
        favourite: this.favourite
      };

      this.updateMovie(newMovie);

      this.title = '';
      this.year = '';
      this.score = '';
      this.favourite = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../sass/var.scss';

h3 {
  margin: 20px;
}

.favourite {
    width: 1rem;
}

.btn {
    border: 1.5px solid $accent;
    color: $accent;
}

.btn:hover {
    background: $accent;
    color: $secondary;
  }

.btn:focus {
    border: 3px solid $accent;
  }

</style>
