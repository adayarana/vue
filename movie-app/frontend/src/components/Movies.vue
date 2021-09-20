<template>
<div>
<div
v-for="movie in movies"
:key="movie.id"
@deleteMovie="$emit('deleteMovie', movie.id)"
>
<h3>
    {{ movie.title }}
    <em v-on:click="$emit('deleteMovie', movie.id)" class="fas fa-times"></em>
</h3>
<h4>{{ movie.year }}</h4>
<h5>{{ movie.score }}</h5>
<p
v-on:click="$emit('handleFavourite', movie.id)"
>
  <em class="far fa-star" :class="[movie.favourite === true ? 'fas fa-star' : 'far fa-star']"></em>
</p>
</div>
</div>
</template>

<script>
export default {
  name: 'Movies',
  props: {
    movies: Object
  },
  emits: ['deleteMovie', 'handleFavourite']
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

.fas:hover, .far:hover {
    transform: scale(1.3) rotate(0.5turn);
    transition: 1s;
}

.fa-star {
  cursor: pointer;
  color: $accent;
}

</style>
