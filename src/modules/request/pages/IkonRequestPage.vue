<template>
  <ikon-data-table-page-template :key="key"
                                  :data-table-title="getDataTableTitle"
                                  :default-item="defaultItem"
                                  :delete-dialog-title="getDeleteDialogTitle"
                                  :headers="headers"
                                  :show-toolbar-button="false"
                                  :show-delete-action="false"
                                  :show-update-action="false"
                                  :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.requests.addRequest')"
                                  :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.requests.addRequest')"
                                  :update-dialog-title="$vuetify.lang.t('$vuetify.pages.requests.editRequest')"
                                  actions-suffix="Request"
                                  show-select>
    <template v-slot:dialog="{item}">
      <ikon-request-dialog :item="item"/>
    </template>
    <template v-slot:custom-action-1="{item}">
      <ikon-data-table-request-display-user-action-button :request="item"/>
    </template>
    <template v-slot:custom-action-2="{item}">
      <ikon-data-table-request-verify-action-button :request="item"/>
    </template>
    <template v-slot:filter>
      <ikon-request-filter/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import Request from '@/modules/request/models/request'

export default {
  name: 'IkonRequestPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonRequestDialog: () => import('@/modules/request/components/IkonRequestDialog'),
    IkonDataTableRequestDisplayUserActionButton: () => import('../components/IkonDataTableRequestDisplayUserActionButton'),
    IkonRequestFilter: () => import('../components/IkonRequestFilter'),
    IkonDataTableRequestVerifyActionButton: () => import('../components/IkonDataTableRequestVerifyActionButton')
  },
  data () {
    return {
      headers: [],
      defaultItem: new Request(),
      key: this.$dayjs().toISOString()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.requests.requestList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.requests.deleteRequestText')
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
        { text: this.$vuetify.lang.t('$vuetify.pages.requests.dataTableHeaders.createdAt'), value: 'created_at', align: 'start' },
        { text: this.$vuetify.lang.t('$vuetify.pages.requests.dataTableHeaders.sports'), value: 'sport', sortable: false },
        { text: this.$vuetify.lang.t('$vuetify.pages.requests.dataTableHeaders.jobs'), value: 'job', sortable: false },
        { text: this.$vuetify.lang.t('$vuetify.pages.requests.dataTableHeaders.languages'), value: 'language', sortable: false },
        { text: this.$vuetify.lang.t('$vuetify.pages.requests.dataTableHeaders.message'), value: 'message', sortable: false },
        { text: this.$vuetify.lang.t('$vuetify.pages.requests.dataTableHeaders.verified'), value: 'verified', sortable: false },
        { text: this.$vuetify.lang.t('$vuetify.pages.requests.dataTableHeaders.introductionMethod'), value: 'introduction_method', sortable: false },
        { text: this.$vuetify.lang.t('$vuetify.pages.requests.dataTableHeaders.phone'), value: 'phone', sortable: false },
        { text: this.$vuetify.lang.t('$vuetify.pages.requests.dataTableHeaders.address'), value: 'address', sortable: false },
        { text: this.$vuetify.lang.t('$vuetify.pages.requests.dataTableHeaders.url'), value: 'url', sortable: false },
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
