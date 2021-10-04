<template>
    <div class="shows-container">
      <div v-if="shows.length > 0">
        <div
        v-for="(show, index) in shows"
        :key="index"
        >
          <img :src="show.image.medium" :alt="show.name">
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
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
