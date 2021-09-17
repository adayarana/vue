<template>
<div>
<div
v-for="movie in movies"
:key="movie.id"
@delete-movie="$emit('deleteMovie', movie.id)"
>

<h3>
    {{ movie.title }}
    <em v-on:click="$emit('deleteMovie', movie.id)" class="fas fa-times"></em>
</h3>
<h4>{{ movie.year }}</h4>
<h5
v-on:dblclick="$emit('toggle', movie.id)"
:class="[movie.favourite === true ? 'favourite' : '']">{{ movie.score }}</h5>
</div>
</div>
</template>

<script>
export default {
  name: 'Movies',
  props: {
    movies: Array
  },
  emits: ['deleteMovie', 'toggle']
};
</script>

<style lang="scss" scoped>
@import '../sass/var.scss';

h5 {
  cursor: pointer;
}

div {
    margin: 5px;
    padding: 10px 20px;
}

.fas {
    color: $alternative;
}

.favourite {
    color: $accent;
}

</style>
