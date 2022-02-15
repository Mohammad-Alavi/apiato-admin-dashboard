<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs"
             @click="$router.push({name: 'slider-providers', params: {slider_id: item.id, slider: item}})"
             v-on="on">
        <v-icon small>mdi-account-search</v-icon>
      </v-btn>
    </template>
    <span>{{ $vuetify.lang.t('$vuetify.pages.sliders.viewProviders') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'IkonDataTableSliderProvidersActionButton',
  props: {
    item: {
      required: true
    }
  }
}
</script>
