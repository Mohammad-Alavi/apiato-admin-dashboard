<template>
  <ikon-data-table-page-template :key="key"
                                 :data-table-title="getDataTableTitle"
                                 :default-item="defaultItem"
                                 :delete-dialog-title="getDeleteDialogTitle"
                                 :headers="headers"
                                 :order-by-override="{'last_accepted_order': 'orders:id,user_id|accepted_at'}"
                                 :show-delete-action="true"
                                 :show-toolbar-button="true"
                                 :show-update-action="true"
                                 :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.users.addAccount')"
                                 :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.users.addAccount')"
                                 :update-dialog-title="$vuetify.lang.t('$vuetify.pages.users.editAccount')"
                                 actions-suffix="User"
                                 show-select>
    <template v-slot:add-dialog="{item}">
      <ikon-user-add-dialog :item="item"/>
    </template>
    <template v-slot:edit-dialog="{item}">
      <ikon-user-edit-dialog :item="item"/>
    </template>
    <template v-slot:delete-dialog="{item}">
      <ikon-delete-account-dialog-body :item="item"/>
    </template>
    <template v-slot:filter>
      <ikon-user-filter/>
    </template>
    <template v-slot:custom-action-1="{item}">
      <ikon-data-table-user-orders-action-button :item="item"/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import User from '@/modules/users/models/user'

export default {
  name: 'IkonUserPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonUserEditDialog: () => import('@/modules/users/components/IkonUserEditDialog'),
    IkonUserAddDialog: () => import('@/modules/users/components/IkonUserAddDialog'),
    IkonUserFilter: () => import('@/modules/users/components/IkonUserFilter'),
    IkonDataTableUserOrdersActionButton: () => import('@/modules/users/components/IkonDataTableUserOrdersActionButton'),
    IkonDeleteAccountDialogBody: () => import('@/modules/users/components/IkonDeleteAccountDialogBody')
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
        {
          text: this.$vuetify.lang.t('$vuetify.pages.users.dataTableHeaders.role'),
          value: 'roles_names',
          sortable: false
        },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.dataTableHeaders.gender'), value: 'gender' },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.dataTableHeaders.birth'), value: 'birth' },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.dataTableHeaders.registeredAt'), value: 'created_at' },
        {
          text: this.$vuetify.lang.t('$vuetify.pages.users.dataTableHeaders.emailVerifiedAt'),
          value: 'email_verified_at'
        },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.dataTableHeaders.suspendedAt'), value: 'suspended_at' },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.dataTableHeaders.lastBooking'), value: 'last_accepted_order' },
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
