<template>
  <v-row justify="center" no-gutters>
    <v-col class="text-start ps-5 pa-3" cols="12">
    <p class="my-auto text-left text-subtitle-1">
      {{
        $vuetify.lang.t('$vuetify.pages.sliders.pages.providers.filter.filterProvidersTitle')
      }}
    </p>
    </v-col>
    <v-col class="text-start ps-5" cols="12">
    <v-switch
      v-model="localItem.allProviders"
      :false-value=0
      :label="localItem.allProviders ?
             $vuetify.lang.t('$vuetify.pages.sliders.pages.providers.filter.all'):
             $vuetify.lang.t('$vuetify.pages.sliders.pages.providers.filter.onlyInSlider')"
      :true-value=1
    />
    </v-col>
    <v-col class="text-start ps-5 pa-3" cols="12">
    <p v-if="!localItem.onlyInSlider" class="my-auto text-left text-caption">
      {{
        $vuetify.lang.t('$vuetify.pages.sliders.pages.providers.filter.filterProvidersSubtitle')
      }}
    </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IkonSliderProvidersFilterFilters',
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  computed: {
    localItem: {
      get () {
        return this.filter
      },
      set (v) {
        this.$emit('update:filter', v)
      }
    }
  }
}
</script>
