<template>
    <div class="show-container">
      <div class="show-container__info">
        <h1 class="info__title">{{ currentShow.name }}</h1>
        <ul class="info__genres">
          <li v-for="(genre, index) in currentShow.genres" :key="index">{{ genre }}</li>
        </ul>
        <section class="info__image">
          <figure class="image__figure">
            <img class="figure__image" :src="currentShow.image?.medium" :alt="currentShow.name">
          </figure>
        </section>
            <p class="info__language">Language: {{  currentShow.language }}</p>
            <p class="info__status">Status: {{  currentShow.status }}</p>
            <p class="info__network">Network: {{  currentShow.network?.name }}</p>
            <p class="info__rating">Rating: {{  currentShow.rating?.average }}</p>
            <button type="button" class="info__button">
              <router-link to="/" exact tag="button">
                Back
              </router-link>
            </button>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Show',
  props: ['id', 'show'],
  data() {
    return {
      currentShow: {
        type: Object,
        default: {}
      }
    };
  },
  mounted() {
    this.currentShow = JSON.parse(this.show);
  }
};

</script>

<style lang="scss" scoped>
@import '../sass/var.scss';

.show-container {

   > div, h1, p, ul, li, section, figure, img, button {
     margin: 0.25rem;
   }

  margin: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .show-container__info {
    .info__button {
      > a {
         color: $secondary;
         background: $accent;
         transition: background linear 1s;
      }

      > a:hover {
        background: $accent-hover;
      }
    }

    .info__genres {
      writing-mode: tb-rl;
    }
  }

}

</style>
