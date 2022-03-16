<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-show="show" :loading="loading" icon v-bind="attrs" @click="addProviderToSlider" v-on="on">
        <v-icon small color="green">mdi-plus-circle-outline</v-icon>
      </v-btn>
    </template>
    <span>{{ $vuetify.lang.t('$vuetify.pages.sliders.pages.providers.addProviderToSlider') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'IkonDataTableSliderProvidersAddActionButton',
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
      return !this.provider.isInSlider(this.$route.params.slider_id)
    }
  },
  methods: {
    addProviderToSlider () {
      this.loading = true
      this.$store.dispatch('addProviderToSlider', {
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
