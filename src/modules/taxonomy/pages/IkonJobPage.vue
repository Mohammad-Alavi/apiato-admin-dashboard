<template>
  <ikon-data-table-page-template :key="key"
                                  :data-table-title="getDataTableTitle"
                                  :default-item="defaultItem"
                                  :delete-dialog-title="getDeleteDialogTitle"
                                  :headers="headers"
                                  :show-toolbar-button="true"
                                  :show-delete-action="true"
                                  :show-update-action="true"
                                  :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.jobs.addJob')"
                                  :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.jobs.addJob')"
                                  :update-dialog-title="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.jobs.editJob')"
                                  actions-suffix="Job"
                                  show-select>
    <template v-slot:add-dialog="{item}">
      <ikon-job-dialog :item="item"/>
    </template>
    <template v-slot:edit-dialog="{item}">
      <ikon-job-dialog :item="item"/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import Job from '@/modules/taxonomy/models/job'

export default {
  name: 'IkonJobPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonJobDialog: () => import('@/modules/taxonomy/components/IkonJobDialog')
  },
  data () {
    return {
      headers: [],
      defaultItem: new Job(),
      key: this.$dayjs().toISOString()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.jobs.jobList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.jobs.deleteJobText')
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
        { text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.jobs.dataTableHeaders.name'), value: 'name', align: 'start' },
        { text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.jobs.dataTableHeaders.labelEn'), value: 'label_en' },
        { text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.jobs.dataTableHeaders.labelDe'), value: 'label_de' },
        { text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.jobs.dataTableHeaders.category'), value: 'category.name' },
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
