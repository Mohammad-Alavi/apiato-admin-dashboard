<template>
  <v-row justify="center" no-gutters>
    <v-col class="text-start ps-5 pa-3" cols="12">
      <p class="my-auto text-left text-subtitle-1">
        {{
          $vuetify.lang.t('$vuetify.pages.applications.filter.filterApplicationsTitle')
        }}
      </p>
    </v-col>
    <v-col cols="11">
      <ikon-autocomplete
        :display-function="applicationStatusDisplayMethod"
        :items="ApplicationStatuses"
        :multiple="false"
        rules=""
        :name="$vuetify.lang.t('$vuetify.pages.applications.filter.status')"
        :selected-items.sync="localItem.applicationStatus"
      />
    </v-col>
  </v-row>
</template>

<script>
import { ApplicationStatuses } from '@/modules/application/constants/application-statuses'

export default {
  name: 'IkonApplicationFilterFilters',
  components: {
    IkonAutocomplete: () => import('@/modules/app/components/IkonAutocomplete')
  },
  data () {
    return {
      ApplicationStatuses: Object.keys(ApplicationStatuses).map(function (key) {
        return ApplicationStatuses[key]
      })
    }
  },
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
  },
  methods: {
    applicationStatusDisplayMethod (data) {
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
