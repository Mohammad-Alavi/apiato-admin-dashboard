<template>
  <ikon-data-table-page-template :key="key"
                                  :data-table-title="getDataTableTitle"
                                  :default-item="defaultItem"
                                  :delete-dialog-title="getDeleteDialogTitle"
                                  :headers="headers"
                                  :show-toolbar-button="true"
                                  :show-delete-action="true"
                                  :show-update-action="true"
                                  :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.sports.addSport')"
                                  :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.sports.addSport')"
                                  :update-dialog-title="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.sports.editSport')"
                                  actions-suffix="Sport"
                                  show-select>
    <template v-slot:dialog="{item}">
      <ikon-sport-dialog :item="item"/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import Sport from '@/modules/taxonomy/models/sport'

export default {
  name: 'IkonSportPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonSportDialog: () => import('@/modules/taxonomy/components/IkonSportDialog')
  },
  data () {
    return {
      headers: [],
      defaultItem: new Sport(),
      key: this.$dayjs().toISOString()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.sports.sportList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.sports.deleteSportText')
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
        { text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.sports.dataTableHeaders.name'), value: 'name', align: 'start' },
        { text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.sports.dataTableHeaders.labelEn'), value: 'label_en' },
        { text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.sports.dataTableHeaders.labelDe'), value: 'label_de' },
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
