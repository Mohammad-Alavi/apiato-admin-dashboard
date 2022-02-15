<template>
  <ikon-data-table-page-template :key="key"
                                 :data-table-title="getDataTableTitle"
                                 :default-item="defaultItem"
                                 :delete-dialog-title="getDeleteDialogTitle"
                                 :headers="headers"
                                 :row-pointer="true"
                                 :show-delete-action="true"
                                 :show-toolbar-button="true"
                                 :show-update-action="true"
                                 :sortable-data-table="true"
                                 :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.sliders.addSlider')"
                                 :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.sliders.addSlider')"
                                 :update-dialog-title="$vuetify.lang.t('$vuetify.pages.sliders.editSlider')"
                                 actions-suffix="Slider"
                                 show-select>
    <template v-slot:dialog="{item}">
      <ikon-slider-dialog :item="item"/>
    </template>
    <template v-slot:custom-action-1="{item}">
      <ikon-data-table-slider-providers-action-button :item="item"/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import Slider from '@/modules/slider/models/slider'

export default {
  name: 'IkonSliderPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonSliderDialog: () => import('@/modules/slider/components/IkonSliderDialog'),
    IkonDataTableSliderProvidersActionButton: () => import('@/modules/slider/components/IkonDataTableSliderProvidersActionButton')
  },
  data () {
    return {
      headers: [],
      defaultItem: new Slider(),
      key: this.$dayjs().toISOString()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.sliders.sliderList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.sliders.deleteSliderText')
    }
  },
  watch: {
    $route () {
      this.key = this.$dayjs().toISOString()
      this.initialize()
    }
  },
  methods: {
    resetHeaders () {
      this.headers = [
        { text: this.$vuetify.lang.t('$vuetify.pages.sliders.dataTableHeaders.order'), value: 'order', align: 'start' },
        { text: this.$vuetify.lang.t('$vuetify.pages.sliders.dataTableHeaders.name'), value: 'name' },
        {
          text: this.$vuetify.lang.t('$vuetify.pages.sliders.pages.providers.dataTableHeaders.providerCount'),
          value: 'providerCount',
          sortable: false
        },
        { text: this.$vuetify.lang.t('$vuetify.general.actions'), value: 'actions', sortable: false }
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
