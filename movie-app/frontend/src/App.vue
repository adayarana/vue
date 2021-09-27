<template>
  <div class="app">
    <Header title="MovieApp"/>
  <router-view/>
    <Footer />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};

</script>

<style lang="scss">
@import './sass/var.scss';

* {
  font-family: 'IBM Plex Sans', sans-serif;
  background: $secondary;
  color: $primary;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app {
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

input {
    caret-color: $accent;
    cursor: pointer;
    border-radius: 15%;
    border: 1.5px solid $primary;
    width: 100px;
    height: 30px;
    outline: none;
    text-align: center;
    transition: background linear 1s;
    margin: 0.5rem;
    padding: 0.25rem;
  }

input:hover {
    background: $primary;
    color: $secondary;
  }

input:focus {
    border: 3px solid $primary;
  }

label {
  margin: 0.5rem;
  padding: 0.25rem;
}
</style>
