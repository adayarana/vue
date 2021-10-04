<template>
    <header class="header-container">
        <div class="header-container__nav-logo">
          <div class="nav-logo__title">
            <router-link to="/" exact tag="h1" class="nav-link">{{ title }}</router-link>
            <em class="fas fa-film"></em>
          </div>
          <button type="button" class="nav-menu-button" @click="toggleHeader" >
            <em :class="[navButton ? 'fas fa-times' : 'fas fa-bars']"></em>
          </button>
        </div>
        <nav class="header-container__nav-menu">
            <ul :class="[navButton ? 'nav-menu__mobile--open' : 'nav-menu__mobile--close']">
              <li>
                <router-link to="/filmography" exact tag="li"
                class="nav-link">Filmography</router-link>
              </li>
              <!-- <li>
                <router-link to="/log" exact tag="li" class="nav-link">
                  <a class="nav-link">{{userLogged ? 'Log Out' : 'Log In'}}</a>
                </router-link>
              </li>
              <li>
                <router-link to="/signup" exact tag="li" class="nav-link">Sign Up</router-link>
              </li> -->
              <li>
                <button type="button" class="input-link">
                  <em class="fas fa-moon"></em>
                </button>
              </li>
              <li>
                <form action="" class="nav-menu__form">
                  <input
                    class="input-link search"
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Search"
                    >
                </form>
              </li>
            </ul>
        </nav>
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
  },
  data() {
    return {
      navButton: false,
      userLogged: false
    };
  },
  methods: {
    toggleHeader() {
      this.navButton = !this.navButton;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../sass/var.scss';

* {
  font-weight: bold;
}

.router-link-exact-active {
  color: $accent;
}

.header-container {
    width: 100vw;
    top: 0;
}

.header-container__nav-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-size: 1.5rem;
    margin-right: auto;

    .nav-menu-button {
        border: none;
        background: $secondary;
        box-shadow: none;
    }

    > div {
        display: flex;
        align-items: center;
    }

    > div > .nav-link {
        padding: 0.25rem;
    }

}

.input-link {

    > em {
        color: $secondary;
        background: $accent;
        transition: background linear 1s;
    }
}

.input-link:hover > em {
    background: $accent-hover;
}

.nav-menu__mobile--close {
    display: none;
}

.nav-menu__mobile--open {
    text-align: center;
    margin: 0;
    padding: 0;
    font-size: 1.2em;
}

.nav-menu__mobile--open > li, a, form, i {
    padding: 0.5rem;
}

.search {
    width: 150px;
}

@media screen and (min-width: 415px) {

    .header-container {
        display: flex;
        justify-content: center;
        position: relative;
        margin: 0;
        padding: 0;
    }

   .nav-menu-button {
        display: none;
    }

    .nav-link {
        padding: 0.5rem;
    }

    .nav-menu__mobile--close {
        display: flex;
        align-items: center;
        text-align: center;
        padding: 1.5rem 1rem 1rem 1rem;
        font-size: 1.2rem;
    }

    .nav-link:hover {
        text-decoration: underline;
        text-decoration-style: double;
        text-decoration-color: $alternative;
        text-decoration-thickness: 0.15rem;
    }

}

</style>
