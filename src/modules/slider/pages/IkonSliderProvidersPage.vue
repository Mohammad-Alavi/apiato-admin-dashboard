<template>
  <ikon-data-table-page-template :key="key"
                                 :data-table-title="getDataTableTitle"
                                 :default-item="defaultItem"
                                 :delete-dialog-title="getDeleteDialogTitle"
                                 :headers="headers"
                                 :initial-sort-by-column="isDisplayingAllProviders ? 'name' : 'order'"
                                 :order-by-override="{name: 'users|name'}"
                                 :row-pointer="!isDisplayingAllProviders"
                                 :show-delete-action="false"
                                 :show-toolbar-button="false"
                                 :show-update-action="false"
                                 :sortable-data-table="!isDisplayingAllProviders"
                                 :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.sliders.pages.providers.addProvider')"
                                 :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.sliders.pages.providers.addProvider')"
                                 :update-dialog-title="$vuetify.lang.t('$vuetify.pages.sliders.pages.providers.editProvider')"
                                 actions-suffix="Provider"
                                 show-select>
    <template v-slot:dialog="{item}">
      <ikon-user-dialog :item="item"/>
    </template>
    <template v-slot:filter>
      <ikon-slider-providers-filter/>
    </template>
    <template v-slot:custom-action-1="{item}">
      <ikon-data-table-slider-providers-add-action-button :provider="item"/>
    </template>
    <template v-slot:custom-action-2="{item}">
      <ikon-data-table-slider-providers-remove-action-button :provider="item"/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import Provider from '@/modules/users/models/provider'
import { SET_FILTER } from '@/modules/app/store/mutation-types'

export default {
  name: 'IkonSliderProvidersPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonUserDialog: () => import('@/modules/users/components/IkonUserDialog'),
    IkonSliderProvidersFilter: () => import('../components/IkonSliderProvidersFilter'),
    IkonDataTableSliderProvidersAddActionButton: () => import('../components/IkonDataTableSliderProvidersAddActionButton'),
    IkonDataTableSliderProvidersRemoveActionButton: () => import('../components/IkonDataTableSliderProvidersRemoveActionButton')
  },
  data () {
    return {
      headers: [],
      defaultItem: new Provider(),
      key: this.$dayjs().toISOString()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.sliders.pages.providers.providerList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.sliders.pages.providers.deleteProviderText')
    },
    isDisplayingAllProviders () {
      return !this.$lodash.isNil(this.$store.state.filter.allProviders) && this.$store.state.filter.allProviders === 1
    }
  },
  watch: {
    $route () {
      this.repaintComponent()
      this.initialize()
    },
    isDisplayingAllProviders: {
      handler: function () {
        this.resetHeaders()
        this.repaintComponent()
      },
      deep: true
    }
  },
  methods: {
    resetHeaders () {
      this.headers = [
        {
          text: this.$vuetify.lang.t('$vuetify.pages.sliders.dataTableHeaders.order'),
          value: 'order',
          align: 'start',
          sortable: !this.isDisplayingAllProviders
        },
        {
          text: this.$vuetify.lang.t('$vuetify.pages.sliders.pages.providers.dataTableHeaders.name'),
          value: 'name',
          sortable: true
        },
        {
          text: this.$vuetify.lang.t('$vuetify.pages.sliders.pages.providers.dataTableHeaders.description'),
          sortable: false,
          value: 'description'
        },
        {
          text: this.$vuetify.lang.t('$vuetify.pages.sliders.pages.providers.dataTableHeaders.hourlyRate'),
          value: 'hourly_rate',
          sortable: true
        },
        {
          text: this.$vuetify.lang.t('$vuetify.pages.sliders.pages.providers.dataTableHeaders.publishedAt'),
          value: 'published_at',
          sortable: true
        },
        { text: this.$vuetify.lang.t('$vuetify.general.actions'), value: 'actions', sortable: false }
      ]
    },
    applyInitialFilter () {
      this.$store.commit(SET_FILTER, this.$lodash.cloneDeep({ allProviders: 0 }))
    },
    initialize () {
      this.applyInitialFilter()
      this.resetHeaders()
    },
    repaintComponent () {
      this.key = this.$dayjs().toISOString()
    }
  },
  created () {
    this.initialize()
  }
}
</script>
