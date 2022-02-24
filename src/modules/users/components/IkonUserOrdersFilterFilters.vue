<template>
  <v-row justify="center" no-gutters>
    <v-col class="text-start ps-5 pa-3" cols="12">
      <p class="my-auto text-left text-subtitle-1">
        {{
          $vuetify.lang.t('$vuetify.pages.users.pages.orders.filter.filterOrdersTitle')
        }}
      </p>
    </v-col>
    <v-col cols="10">
      <ikon-autocomplete
        :items="statuses"
        rules=""
        :display-function="orderStatusesDisplayMethod"
        :multiple="false"
        :name="$vuetify.lang.t('$vuetify.pages.users.pages.orders.filter.status')"
        :selected-items.sync="localItem.orderStatus"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IkonUserOrdersFilterFilters',
  components: {
    IkonAutocomplete: () => import('@/modules/app/components/IkonAutocomplete')
  },
  data () {
    return {
      statuses: ['pending', 'accepted', 'rejected', 'canceled']
    }
  },
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  watch: {
    filter: {
      handler: v => console.log(v),
      deep: true
    }
  },
  computed: {
    localItem: {
      get () {
        return this.filter
      },
      set (v) {
        console.log(v)
        this.$emit('update:filter', v)
      }
    }
  },
  methods: {
    orderStatusesDisplayMethod (data) {
      return data.item
    }
  }
}
</script>

<style lang="scss">
.role-label {
  min-width: 100px;
}
</style>
