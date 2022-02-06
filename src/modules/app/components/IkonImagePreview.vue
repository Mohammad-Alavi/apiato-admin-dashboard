<template>
  <v-card>
    <v-img :alt="alt" :src="imagePreview(src)" contain max-height="200" max-width="200"/>
  </v-card>
</template>

<script>
export default {
  name: 'IkonImagePreview',
  props: {
    src: {
      required: true
    },
    alt: {
      type: String,
      default: 'image'
    }
  },
  computed: {
    imagePreview () {
      return image => {
        if (!image) return null

        if (typeof image === 'object') { return URL.createObjectURL(image) } else { return image }
      }
    }
  }
}
</script>
