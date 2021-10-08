<template>
    <div class="register-container">
        <div v-if="!userLogged">
            <h3 class="register-container__title">Create an account</h3>
            <form
            class="register-container__form"
            @submit.prevent="onSubmit"
            method="post"
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
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: {
    ...mapState([
      'userLogged'
    ])
  },
  methods: {
    ...mapActions([
      'signup',
      'login'
    ]),
    onSubmit(e) {
      e.preventDefault();

      const user = {
        email: this.email,
        password: this.password
      };

      this.signup(user);
      this.login(user);

      this.email = '';
      this.password = '';

      this.$router.push('log');
    }
  }
};

</script>

<style lang="scss" scoped>
@import '../sass/var.scss';

.register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0.75rem;

    input {
        border-radius: 24px 4px;
    }

    .register-container__form {
        margin: 0.75rem;

        > button {
            margin: 0.75rem;
        }
    }

    small, #log {
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

    .register-container {

        h3 {
            display: none;
        }

    }
}

</style>
