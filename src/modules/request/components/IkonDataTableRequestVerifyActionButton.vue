<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn :loading="loading" icon v-bind="attrs" @click="verify" v-on="on">
        <v-icon small :color="unprocessed ? '' : verified ? 'red' : 'green'">{{ unprocessed ? 'mdi-progress-check' : verified ? 'mdi-check-decagram-outline' : 'mdi-check-decagram' }}</v-icon>
      </v-btn>
    </template>
    <span v-if="verified === true">{{ $vuetify.lang.t('$vuetify.pages.requests.rejectProvider') }}</span>
    <span v-if="unprocessed">{{ $vuetify.lang.t('$vuetify.pages.requests.verifyProvider') }}</span>
    <span v-if="verified === false">{{ $vuetify.lang.t('$vuetify.pages.requests.verifyProvider') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'IkonDataTableRequestVerifyActionButton',
  props: {
    request: {
      required: true
    }
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    unprocessed () {
      return this.$lodash.isNull(this.request.verified)
    },
    verified () {
      return this.request.verified
    }
  },
  methods: {
    verify () {
      this.loading = true
      this.$store.dispatch('verifyProvider', {
        request_id: this.request.id,
        verified: this.unprocessed ? 1 : !this.request.verified
      }).finally(() => {
        this.loading = false
        this.$parent.$emit('data-changed')
      })
    }
  }
}
</script>
