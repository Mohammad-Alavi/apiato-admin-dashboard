<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-show="show" :loading="loading" icon v-bind="attrs" @click="unresolveContact" v-on="on">
        <v-icon small color="red">mdi-minus-circle-outline</v-icon>
      </v-btn>
    </template>
    <span>{{ $vuetify.lang.t('$vuetify.pages.contacts.unresolve') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'IkonDataTableContactUnresolveActionButton',
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
      return !this.$lodash.isNull(this.item.resolved_at)
    }
  },
  methods: {
    unresolveContact () {
      this.loading = true
      this.$store.dispatch('unresolveContact', {
        id: this.item.id
      }).finally(() => {
        this.loading = false
        this.$parent.$emit('data-changed')
      })
    }
  }
}
</script>
