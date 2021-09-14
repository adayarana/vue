<template>
  <div class="container">
    <Header title="MovieApp"/>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style lang="scss">
@import './sass/var.scss';

* {
  font-family: 'Roboto', sans-serif;
  background: $secondary;
  color: $primary;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  padding: 30px;
  text-align: center;
}

button {
    all: unset;
    color: $secondary;
    border: 2px solid;
    cursor: pointer;
    text-align: center;
    background: $accent;
    width: 100px;
    height: 33px;
    border-radius: 50em;
    transition: background linear 1s;
    box-shadow: 1px 0.5px 0.5px 0.5px $accent;
}

button:hover {
  background: $accent-hover;
}
</style>
