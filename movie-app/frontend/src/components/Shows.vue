<template>
    <div class="shows-container">
      <div v-if="shows.length > 0">
        <section class="shows-container__slider">
          <figure class="slider__figure">
            <img
            v-for="(show, index) in shows"
            :key="index"
            class="figure__img-slider"
            :src="show.image.medium"
            :alt="show.name">
          </figure>
        </section>
      </div>
      <div v-else>
        <p>Loading Shows...</p>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Shows',
  computed: {
    ...mapState([
      'shows'
    ])
  }
};

</script>

<style lang="scss" scoped>

.shows-container {
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .shows-container__slider {
    overflow: hidden;
    cursor: pointer;
  }

  // Set up width

  .slider__figure {
    position: relative;
    width: 30000%;
    margin: 0;
    left: 0;
    animation: 20s slider infinite;
  }

  .figure__img-slider {
    float: left;
  }

}

@keyframes slider {
  0% {
    left: 0;
  }

  20% {
    left: 0;
  }

  25% {
    left: -100%;
  }

  45% {
    left: -100%;
  }

  50% {
    left: -200%;
  }

  70% {
    left: -200%;
  }

  75% {
    left: -300%;
  }

  95% {
    left: -300%;
  }

  100% {
    left: -400%;
  }
}

</style>
