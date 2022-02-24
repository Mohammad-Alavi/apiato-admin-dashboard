<template>
  <v-row justify="center" no-gutters>
    <v-col class="text-start ps-5 pa-3" cols="12">
      <p class="my-auto text-left text-subtitle-1">
        {{
          $vuetify.lang.t('$vuetify.pages.requests.filter.filterRequestsTitle')
        }}
      </p>
    </v-col>
    <v-col class="text-start ps-5" cols="12">
      <v-switch
        v-model="localItem.allRequests"
        :false-value=0
        :label="localItem.allRequests ?
             $vuetify.lang.t('$vuetify.pages.requests.filter.all'):
             $vuetify.lang.t('$vuetify.pages.requests.filter.onlyApproved')"
        :true-value=1
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IkonRequestFilterFilters',
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
