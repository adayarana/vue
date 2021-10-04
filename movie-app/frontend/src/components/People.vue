<template>
    <p>Soy People</p>
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
