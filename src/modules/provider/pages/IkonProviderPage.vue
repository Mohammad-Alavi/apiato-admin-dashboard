<template>
  <ikon-data-table-page-template :data-table-title="getDataTableTitle"
                                 :default-item="defaultItem"
                                 :delete-dialog-title="getDeleteDialogTitle"
                                 :headers="headers"
                                 :order-by-override="{name: 'name'}"
                                 :show-delete-action="false"
                                 :show-toolbar-button="false"
                                 :show-update-action="true"
                                 :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.providers.addProvider')"
                                 :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.providers.addProvider')"
                                 :update-dialog-title="$vuetify.lang.t('$vuetify.pages.providers.editProvider')"
                                 actions-suffix="Provider"
                                 show-select>
    <template v-slot:edit-dialog="{item}">
      <ikon-provider-dialog :item="item"/>
    </template>
    <template v-slot:custom-action-1="{item}">
      <ikon-provider-gallery-page-action-button :item="item"/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import Provider from '@/modules/provider/models/provider'

export default {
  name: 'IkonProviderPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonProviderDialog: () => import('@/modules/provider/components/IkonProviderDialog'),
    IkonProviderGalleryPageActionButton: () => import('@/modules/provider/components/IkonProviderGalleryPageActionButton')
  },
  data () {
    return {
      headers: [],
      defaultItem: new Provider()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.providers.providerList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.providers.deleteProviderText')
    }
  },
  watch: {
    $route () {
      this.initialize()
    }
  },
  methods: {
    resetHeaders () {
      this.headers = [
        { text: this.$vuetify.lang.t('$vuetify.pages.providers.dataTableHeaders.name'), value: 'name', align: 'start' },
        { text: this.$vuetify.lang.t('$vuetify.pages.providers.dataTableHeaders.description'), value: 'description' },
        { text: this.$vuetify.lang.t('$vuetify.pages.providers.dataTableHeaders.hourlyRate'), value: 'hourly_rate' },
        { text: this.$vuetify.lang.t('$vuetify.pages.providers.dataTableHeaders.languages'), value: 'languageNames' },
        { text: this.$vuetify.lang.t('$vuetify.pages.providers.dataTableHeaders.categories'), value: 'categoryNames' },
        { text: this.$vuetify.lang.t('$vuetify.pages.providers.dataTableHeaders.specializations'), value: 'specializationNames' },
        { text: this.$vuetify.lang.t('$vuetify.pages.providers.dataTableHeaders.publishedAt'), value: 'published_at' },
        { text: this.$vuetify.lang.t('$vuetify.general.actions'), value: 'actions', sortable: false, width: 150 }
      ]
    },
    initialize () {
      this.resetHeaders()
    }
  },
  created () {
    this.initialize()
  }
}
</script>
