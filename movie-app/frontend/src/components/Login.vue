<template>
    <div class="login-container">
        <h3 class="login-container__title">Log In</h3>
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
            <button type="submit">Log In</button>
        </form>
        <small>
            Dont have an account?
            <router-link
            id="signup"
            to="/signup"
            exact
            tag="small"
            >
            Sign Up
            </router-link>
        </small>
    </div>
</template>

<script>

export default {
  name: 'Login',
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

    input {
        border-radius: 24px 4px;
    }

    .login-container__form {
        margin: 0.75rem;

        > button {
            margin: 0.75rem;
        }
    }

    > small, #signup {
        font-weight: bold;
        margin: 0.5rem;

        #signup {
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
