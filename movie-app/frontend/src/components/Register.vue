<template>
    <div class="login-container">
        <h3 class="login-container__title">Create an account</h3>
        <form
        class="login-container__form"
        @submit="onSubmit"
        action=""
        >
            <div>
                <label for="email"></label>
                <p>Email:</p>
                <input
                class="form__button"
                id="email"
                name="email"
                v-model="email"
                type="email"
                placeholder="Enter your email"
                autocomplete="off"
                required
                >
            </div>
            <div>
                <label for="password"></label>
                <p>Password:</p>
                <input
                class="form__button"
                id="password"
                name="password"
                v-model="password"
                type="password"
                placeholder="Enter your password"
                autocomplete="off"
                minlength="6"
                required
                >
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <small>
            Already have an account?
            <router-link
            id="log"
            to="/log"
            exact
            tag="small"
            >
            Log In
            </router-link>
        </small>
    </div>
</template>

<script>

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const user = {
        email: this.email,
        password: this.password
      };

      console.log(user);

      this.email = '';
      this.password = '';
    }
  }
};

</script>

<style lang="scss" scoped>
@import '../sass/var.scss';

.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0.75rem;

    .login-container__form {
        margin: 0.75rem;

        > button {
            margin: 0.75rem;
        }
    }

    > small, #log {
        font-weight: bold;
        margin: 0.5rem;

        #log {
            color: $alternative;
        }
    }

    .form__button {
        border: 1.5px solid $accent;
        color: $accent;
        width: 150px;
    }

    .form__button:hover {
        background: $accent;
        color: $secondary;
    }

    .form__button:focus {
        border: 3px solid $accent;
    }

}

@media screen and (min-width: 415px) {

    .login-container {

        > h3 {
            display: none;
        }

    }
}

</style>
