<template>
  <ikon-data-table-page-template :key="key"
                                  :data-table-title="getDataTableTitle"
                                  :default-item="defaultItem"
                                  :delete-dialog-title="getDeleteDialogTitle"
                                  :headers="headers"
                                  :show-toolbar-button="true"
                                  :show-delete-action="true"
                                  :show-update-action="true"
                                  :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.users.addAccount')"
                                  :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.users.addAccount')"
                                  :update-dialog-title="$vuetify.lang.t('$vuetify.pages.users.editAccount')"
                                  actions-suffix="User"
                                  show-select>
    <template v-slot:dialog="{item}">
      <ikon-user-dialog :item="item"/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import User from '@/modules/users/models/user'

export default {
  name: 'IkonUserPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonUserDialog: () => import('@/modules/users/components/IkonUserDialog')
  },
  data () {
    return {
      headers: [],
      defaultItem: new User(),
      key: this.$dayjs().toISOString()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.users.accountList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.users.deleteAccountText')
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
        {
          text: this.$vuetify.lang.t('$vuetify.pages.users.dataTableHeaders.name'),
          align: 'start',
          value: 'name'
        },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.dataTableHeaders.email'), value: 'email' },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.dataTableHeaders.role'), value: 'roles_names', sortable: false },
        { text: this.$vuetify.lang.t('$vuetify.general.gender'), value: 'gender' },
        { text: this.$vuetify.lang.t('$vuetify.general.birth'), value: 'birth' },
        { text: this.$vuetify.lang.t('$vuetify.general.registeredAt'), value: 'created_at' },
        { text: this.$vuetify.lang.t('$vuetify.general.emailVerifiedAt'), value: 'email_verified_at' },
        { text: this.$vuetify.lang.t('$vuetify.general.suspendedAt'), value: 'suspended_at' },
        { text: this.$vuetify.lang.t('$vuetify.general.lastBooking'), value: 'last_accepted_order' },
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
