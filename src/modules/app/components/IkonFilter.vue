<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on, attr }">
      <v-btn v-bind="attr" v-on="on" icon>
        <v-icon>mdi-filter-variant</v-icon>
      </v-btn>
    </template>

    <v-card tile>
      <v-app-bar color="primary" dark>
        <v-btn dark icon @click.native="resetFilters">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-spacer/>
        <v-toolbar-title>{{ $vuetify.lang.t('$vuetify.general.components.filter.filter') }}</v-toolbar-title>
        <v-spacer/>
        <v-tooltip left>
          <template v-slot:activator="{on, attrs}">
            <v-btn v-bind="attrs" v-on="on" dark icon @click="clearFilter">
              <v-icon>mdi-filter-variant-remove</v-icon>
            </v-btn>
          </template>
          <span>
              {{ $vuetify.lang.t('$vuetify.general.components.filter.resetFiltersTooltip') }}
          </span>
        </v-tooltip>
      </v-app-bar>

      <ikon-filter-filters :key="filterComponentKey" :filter.sync="filter" class="pb-16"/>

      <v-btn class="mb-4" color="primary" elevation="2" @click="applyFilter">
        {{ $vuetify.lang.t('$vuetify.general.components.filter.applyFilter') }}
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import { RESET_FILTER, SET_FILTER } from '@/modules/app/store/mutation-types'

export default {
  name: 'IkonFilter',
  components: {
    IkonFilterFilters: () => import('@/modules/app/components/IkonFilterFilters')
  },
  data () {
    return {
      dialog: false,
      filter: null,
      filterComponentKey: 0
    }
  },
  watch: {
    $route (to, from) {
      if (from.name !== to.name) {
        this.resetFilters()
      }
    }
  },
  methods: {
    applyFilter () {
      this.$store.commit(SET_FILTER, this.$lodash.cloneDeep(this.filter))
      this.closeDialog()
    },
    clearFilter () {
      this.$store.commit(RESET_FILTER)
      this.resetFilters()
    },
    closeDialog () {
      this.dialog = false
    },
    cloneFilter () {
      this.filter = this.$lodash.cloneDeep(this.$store.state.filter)
    },
    resetFilters () {
      this.cloneFilter()
      this.reloadComponent()
      this.closeDialog()
    },
    reloadComponent () {
      this.filterComponentKey++
    }
  },
  created () {
    this.cloneFilter()
  }
}
</script>
