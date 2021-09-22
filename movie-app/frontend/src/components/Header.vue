<template>
    <header>
        <h1>{{ title }}</h1>
        <router-link to="/filmography">Filmography</router-link>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'MyApp'
    }
  }
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
