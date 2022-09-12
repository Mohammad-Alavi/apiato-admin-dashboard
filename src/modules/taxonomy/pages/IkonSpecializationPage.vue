<template>
  <ikon-data-table-page-template :key="key"
                                  :data-table-title="getDataTableTitle"
                                  :default-item="defaultItem"
                                  :delete-dialog-title="getDeleteDialogTitle"
                                  :headers="headers"
                                  :show-toolbar-button="true"
                                  :show-delete-action="true"
                                  :show-update-action="true"
                                  :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.specializations.addSpecialization')"
                                  :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.specializations.addSpecialization')"
                                  :update-dialog-title="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.specializations.editSpecialization')"
                                  actions-suffix="Specialization"
                                  show-select>
    <template v-slot:filter>
      <ikon-specialization-filter/>
    </template>
    <template v-slot:add-dialog="{item, crudMode}">
      <ikon-specialization-dialog :item="item" :crud-mode="crudMode"/>
    </template>
    <template v-slot:edit-dialog="{item, crudMode}">
      <ikon-specialization-dialog :item="item" :crud-mode="crudMode"/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import Specialization from '@/modules/taxonomy/models/specialization'

export default {
  name: 'IkonSpecializationPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonSpecializationDialog: () => import('@/modules/taxonomy/components/IkonSpecializationDialog'),
    IkonSpecializationFilter: () => import('@/modules/taxonomy/components/IkonSpecializationFilter')
  },
  data () {
    return {
      headers: [],
      defaultItem: new Specialization(),
      key: this.$dayjs().toISOString()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.specializations.specializationList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.specializations.deleteSpecializationText')
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
        { text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.specializations.dataTableHeaders.labelEn'), value: 'label_en', align: 'start' },
        { text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.specializations.dataTableHeaders.labelDe'), value: 'label_de' },
        { text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.specializations.dataTableHeaders.categories'), value: 'category_names', sortable: false },
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
