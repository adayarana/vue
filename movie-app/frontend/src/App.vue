<template>
  <div class="app">
    <Header title="MovieApp"/>
  <router-view/>
    <Footer />
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

button {
    all: unset;
    color: $secondary;
    border: 2px solid;
    cursor: pointer;
    text-align: center;
    background: $accent;
    width: 70px;
    height: 30px;
    border-radius: 50em;
    transition: background linear 1s;
    box-shadow: 1px 0.5px 0.5px 0.5px $accent;
    vertical-align: middle;
    touch-action: manipulation;
    white-space: nowrap;
    user-select: none;
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

input::placeholder {
    color: $accent;
    font-style: italic;
}

input[type="checkbox"] {
  accent-color: $accent;
}

::selection {
    background-color: $accent;
    color: $secondary;
}

label {
  margin: 0.5rem;
  padding: 0.25rem;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

</style>
