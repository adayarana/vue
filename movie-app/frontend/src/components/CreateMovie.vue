<template>
<form
    @addMovie="$emit('addMovie', newMovie)"
    v-on:submit="onSubmit"
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
        class="favourite"
        >
    </div>
    <input
    type="submit"
    value="Add Movie"
    class="btn"
    >
</form>
</template>

<script>
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
    onSubmit(e) {
      e.preventDefault();

      const newMovie = {
        id: Math.floor(Math.random() * 1000),
        title: this.title,
        year: this.year,
        score: this.score,
        favourite: this.favourite
      };

      this.$emit('addMovie', newMovie);

      this.title = '';
      this.year = '';
      this.score = '';
      this.favourite = false;
    }
  },
  emits: ['addMovie']
};
</script>

<style lang="scss" scoped>
@import '../sass/var.scss';

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
