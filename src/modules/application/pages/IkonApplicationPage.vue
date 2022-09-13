<template>
  <ikon-data-table-page-template :key="key"
                                 :data-table-title="getDataTableTitle"
                                 :default-item="defaultItem"
                                 :delete-dialog-title="getDeleteDialogTitle"
                                 :headers="headers"
                                 :show-delete-action="true"
                                 :show-toolbar-button="false"
                                 :show-update-action="true"
                                 :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.applications.addApplication')"
                                 :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.applications.addApplication')"
                                 :update-dialog-title="$vuetify.lang.t('$vuetify.pages.applications.editApplication')"
                                 actions-suffix="Application"
                                 show-select>
    <template v-slot:filter>
      <ikon-application-filter/>
    </template>
    <template v-slot:edit-dialog="{item}">
      <ikon-application-dialog :item="item"/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import Application from '@/modules/application/models/application'

export default {
  name: 'IkonApplicationPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonApplicationDialog: () => import('@/modules/application/components/IkonApplicationDialog'),
    IkonApplicationFilter: () => import('@/modules/application/components/IkonApplicationFilter')
  },
  data () {
    return {
      headers: [],
      defaultItem: new Application(),
      key: this.$dayjs().toISOString()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.applications.applicationList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.applications.deleteApplicationText')
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
        { text: this.$vuetify.lang.t('$vuetify.pages.applications.dataTableHeaders.name'), value: 'name' },
        { text: this.$vuetify.lang.t('$vuetify.pages.applications.dataTableHeaders.email'), value: 'email' },
        { text: this.$vuetify.lang.t('$vuetify.pages.applications.dataTableHeaders.phone'), value: 'phone' },
        { text: this.$vuetify.lang.t('$vuetify.pages.applications.dataTableHeaders.description'), value: 'description' },
        { text: this.$vuetify.lang.t('$vuetify.pages.applications.dataTableHeaders.links'), value: 'links' },
        { text: this.$vuetify.lang.t('$vuetify.pages.applications.dataTableHeaders.status'), value: 'status' },
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
