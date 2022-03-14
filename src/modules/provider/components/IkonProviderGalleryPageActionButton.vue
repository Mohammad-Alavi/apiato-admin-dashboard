<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs"
             @click="$router.push({name: 'provider-gallery', params: {provider_id: item.id, provider: item}})"
             v-on="on">
        <v-icon small>mdi-image-multiple</v-icon>
      </v-btn>
    </template>
    <span>{{ $vuetify.lang.t('$vuetify.pages.providers.viewProviderGallery') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'IkonProviderGalleryPageActionButton',
  props: {
    item: {
      required: true
    }
  }
}
</script>
