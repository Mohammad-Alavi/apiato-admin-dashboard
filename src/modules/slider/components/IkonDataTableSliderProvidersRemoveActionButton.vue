<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-show="show" :loading="loading" icon v-bind="attrs" @click="removeProviderFromSlider" v-on="on">
        <v-icon small color="red">mdi-minus-circle-outline</v-icon>
      </v-btn>
    </template>
    <span>{{ $vuetify.lang.t('$vuetify.pages.sliders.pages.providers.removeProviderToSlider') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'IkonDataTableSliderProvidersRemoveActionButton',
  props: {
    provider: {
      required: true
    }
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    show () {
      return !!this.provider.isInSlider(this.$route.params.slider_id)
    }
  },
  methods: {
    removeProviderFromSlider () {
      this.loading = true
      this.$store.dispatch('removeProviderFromSlider', {
        slider_id: this.$route.params.slider_id,
        provider_id: this.provider.id
      }).finally(() => {
        this.loading = false
        this.$parent.$emit('data-changed')
      })
    }
  }
}
</script>
