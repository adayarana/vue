<template>
    <header>
        <h1>{{ title }}</h1>
        <button v-on:click="$emit('toggleCreateMovie')">
        {{ showCreateMovie ? 'Close' : 'Add Movie' }}
        </button>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'MyApp'
    },
    showCreateMovie: Boolean
  },
  emits: ['toggleCreateMovie']
};
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>
