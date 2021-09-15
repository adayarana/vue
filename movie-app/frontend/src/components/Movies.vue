<template>
<div>
<div
v-for="movie in movies"
:key="movie.id"
@delete-movie="$emit('deleteMovie', movie.id)">
<h3>
    {{ movie.title }}
    <em v-on:click="onDelete(movie.id)" class="fas fa-times"></em>
</h3>
<h4>{{ movie.year }}</h4>
<h5 :class="[movie.score > 8.7 ? 'masterpiece' : '']">{{ movie.score }}</h5>
</div>
</div>
</template>

<script>
export default {
  name: 'Movies',
  props: {
    movies: Array
  },
  methods: {
    onDelete(id) {
      this.$emit('deleteMovie', id);
      console.log(`ID ${id} in component Movie`);
    }
  },
  emits: ['deleteMovie']
};
</script>

<style lang="scss" scoped>
@import '../sass/var.scss';

div {
    margin: 5px;
    padding: 10px 20px;
}

.fas {
    color: $alternative;
}

.masterpiece {
    color: $accent;
}

</style>
