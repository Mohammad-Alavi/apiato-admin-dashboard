<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template #activator="{ on: onMenu, attr }">
      <v-tooltip left>
        <template #activator="{ on: onTooltip }">
          <v-btn icon v-bind="attr" v-on="{ ...onMenu, ...onTooltip }">
            <v-icon>mdi-filter-variant</v-icon>
          </v-btn>
        </template>
        <span>{{ $vuetify.lang.t('$vuetify.general.components.filter.filter') }}</span>
      </v-tooltip>
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
            <v-btn dark icon v-bind="attrs" @click="clearFilter" v-on="on">
              <v-icon>mdi-filter-variant-remove</v-icon>
            </v-btn>
          </template>
          <span>
              {{ $vuetify.lang.t('$vuetify.general.components.filter.resetFiltersTooltip') }}
          </span>
        </v-tooltip>
      </v-app-bar>

      <ikon-rating-filter-filters :key="filterComponentKey" :filter.sync="filter" class="pb-16"/>

      <v-btn class="mb-4" color="primary" elevation="2" @click="applyFilter">
        {{ $vuetify.lang.t('$vuetify.general.components.filter.applyFilter') }}
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import IkonFilter from '@/modules/app/components/IkonFilter'

export default {
  name: 'IkonFilterTemplate',
  extends: IkonFilter,
  components: {
    IkonRatingFilterFilters: () => import('@/modules/rating/components/IkonRatingFilterFilters')
  }
}
</script>
