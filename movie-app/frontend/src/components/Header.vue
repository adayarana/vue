<template>
    <header>
        <h1>{{ title }}</h1>
        <router-link to="/filmography" exact tag="li"><a>Filmography</a></router-link>
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

<style lang="scss" scoped>
@import '../sass/var.scss';

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.router-link-exact-active > a {
  color: $accent;
}

</style>
