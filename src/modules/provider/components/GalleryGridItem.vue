<template>
  <v-col class="d-flex child-flex" cols="3">
    <slot />
  </v-col>
</template>

<script>
import { ElementMixin } from 'vue-slicksort'
export default {
  name: 'GalleryGridItem',
  mixins: [
    ElementMixin
  ]
}
</script>

<style scoped>
</style>
