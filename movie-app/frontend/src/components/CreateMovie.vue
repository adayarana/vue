<template>
  <div class="filmography-container__form">
    <h3 class="form__title">New Movie</h3>
    <form
    class="form__group"
    @submit="onSubmit"
    action=""
    >
      <div>
        <label for="title">Title</label>
        <input
        id="title"
        name="title"
        v-model="title"
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
        v-model="year"
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
        v-model="score"
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
        v-model="favourite"
        type="checkbox"
        class="form__group--favourite"
        >
      </div>
      <input
      type="submit"
      value="Add"
      class="form__group--button"
      >
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CreateMovie',
  data() {
    return {
      title: '',
      year: '',
      score: '',
      favourite: false
    };
  },
  methods: {
    ...mapActions([
      'createMovie'
    ]),
    onSubmit(e) {
      e.preventDefault();

      const newMovie = {
        title: this.title,
        year: this.year,
        score: this.score,
        favourite: this.favourite
      };

      this.createMovie(newMovie);

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

.filmography-container__form {

  text-align: center;

  .form__title {
    margin: 1.2rem;
  }

  .form__group {

    .form__group--button {
      border: 1.5px solid $accent;
      color: $accent;
}

    .form__group--button:hover {
      background: $accent;
      color: $secondary;
  }

    .form__group--button:focus {
      border: 3px solid $accent;
  }

    .form__group--favourite {
      width: 1rem;
}

  }
}

</style>
