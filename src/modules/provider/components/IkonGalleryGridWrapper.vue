<template>
  <v-row>
    <slot />
  </v-row>
</template>

<script>
import { ContainerMixin } from 'vue-slicksort'
export default {
  name: 'IkonGalleryGridWrapper',
  mixins: [
    ContainerMixin
  ]
}
</script>

<style scoped>

</style>
