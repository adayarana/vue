<template>
    <div class="people-container">
        <p>Soy People</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'People',
  computed: {
    ...mapState([
      'people'
    ])
  }
};

</script>

<style lang="scss" scoped>

</style>
