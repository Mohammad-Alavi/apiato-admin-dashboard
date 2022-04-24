<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-show="show" :loading="loading" icon v-bind="attrs" @click="resolveContact" v-on="on">
        <v-icon small color="green">mdi-plus-circle-outline</v-icon>
      </v-btn>
    </template>
    <span>{{ $vuetify.lang.t('$vuetify.pages.contacts.resolve') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'IkonDataTableContactResolveActionButton',
  props: {
    item: {
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
      return this.$lodash.isNull(this.item.resolved_at)
    }
  },
  methods: {
    resolveContact () {
      this.loading = true
      this.$store.dispatch('resolveContact', {
        id: this.item.id
      }).finally(() => {
        this.loading = false
        this.$parent.$emit('data-changed')
      })
    }
  }
}
</script>
