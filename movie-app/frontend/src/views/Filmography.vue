<template>
  <div class="filmography">
    <div>
      <div v-if="editMovie">
        <UpdateMovie />
      </div>
      <div v-else>
        <CreateMovie />
      </div>
    </div>
    <Movies
    @toggleEditMovie="toggleEditMovie"
    :editMovie="editMovie"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Movies from '../components/Movies.vue';
import CreateMovie from '../components/CreateMovie.vue';
import UpdateMovie from '../components/UpdateMovie.vue';

export default {
  name: 'Filmography',
  components: {
    Movies,
    CreateMovie,
    UpdateMovie
  },
  data() {
    return {
      editMovie: false
    };
  },
  computed: {
    ...mapState([
      'movies'
    ])
  },
  methods: {
    ...mapActions([
      'getAllMovies'
    ]),
    toggleEditMovie() {
      this.editMovie = !this.editMovie;
    }
  },
  mounted() {
    this.getAllMovies();
  }
};
</script>
