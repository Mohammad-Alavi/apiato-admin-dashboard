<template>
  <ikon-data-table-page-template :key="key"
                                 :data-table-title="getDataTableTitle"
                                 :default-item="defaultItem"
                                 :delete-dialog-title="getDeleteDialogTitle"
                                 :headers="headers"
                                 :show-delete-action="false"
                                 :show-toolbar-button="false"
                                 :show-update-action="false"
                                 :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.contacts.addContact')"
                                 :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.contacts.addContact')"
                                 :update-dialog-title="$vuetify.lang.t('$vuetify.pages.contacts.editContact')"
                                 actions-suffix="Contact"
                                 initial-sort-by-column="created_at"
                                 initial-sort-desc
                                 show-select>
    <template v-slot:filter>
      <ikon-contact-filter/>
    </template>
    <template v-slot:custom-action-1="{item}">
      <ikon-data-table-contact-resolve-action-button :item="item"/>
    </template>
    <template v-slot:custom-action-2="{item}">
      <ikon-data-table-contact-unresolve-action-button :item="item"/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import Contact from '@/modules/contact/models/contact'
import { SET_FILTER } from '@/modules/app/store/mutation-types'

export default {
  name: 'IkonContactPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonContactFilter: () => import('@/modules/contact/components/IkonContactFilter'),
    IkonDataTableContactUnresolveActionButton: () => import('@/modules/contact/components/IkonDataTableContactUnresolveActionButton'),
    IkonDataTableContactResolveActionButton: () => import('@/modules/contact/components/IkonDataTableContactResolveActionButton')
  },
  data () {
    return {
      headers: [],
      defaultItem: new Contact(),
      key: this.$dayjs().toISOString()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.contacts.contactList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.contacts.deleteContactText')
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
        { text: this.$vuetify.lang.t('$vuetify.pages.contacts.dataTableHeaders.topic'), value: 'topic' },
        { text: this.$vuetify.lang.t('$vuetify.pages.contacts.dataTableHeaders.name'), value: 'name' },
        { text: this.$vuetify.lang.t('$vuetify.pages.contacts.dataTableHeaders.email'), value: 'email' },
        { text: this.$vuetify.lang.t('$vuetify.pages.contacts.dataTableHeaders.message'), value: 'message' },
        { text: this.$vuetify.lang.t('$vuetify.pages.contacts.dataTableHeaders.resolvedAt'), value: 'resolved_at' },
        { text: this.$vuetify.lang.t('$vuetify.pages.contacts.dataTableHeaders.createdAt'), value: 'created_at' },
        { text: this.$vuetify.lang.t('$vuetify.general.actions'), value: 'actions', sortable: false }
      ]
    },
    applyInitialFilter () {
      this.$store.commit(SET_FILTER, this.$lodash.cloneDeep({ isResolved: 0 }))
    },
    initialize () {
      this.applyInitialFilter()
      this.resetHeaders()
    }
  },
  created () {
    this.initialize()
  }
}
</script>
