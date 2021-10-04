<template>
    <div class="shows-container">
        <div
        v-for="(show, index) in shows"
        :key="index"
        >
            <h3>{{ show.name }}</h3>
            <figure>
                <img v-bind:src="show.image.medium" alt="">
                <figcaption></figcaption>
            </figure>
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

</style>
