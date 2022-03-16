<template>
  <v-col class="d-flex child-flex" xl="2" lg="3" md="4" sm="6" cols="12">
    <slot />
  </v-col>
</template>

<script>
import { ElementMixin } from 'vue-slicksort'
export default {
  name: 'IkonGalleryGridItem',
  mixins: [
    ElementMixin
  ]
}
</script>

<style scoped>
</style>
