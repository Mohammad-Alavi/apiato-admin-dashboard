<template>
  <ikon-data-table-page-template :key="key"
                                 :data-table-title="getDataTableTitle"
                                 :default-item="defaultItem"
                                 :delete-dialog-title="getDeleteDialogTitle"
                                 :get-all-action-additional-params="['user_id=' + userId]"
                                 :headers="headers"
                                 :show-delete-action="false"
                                 :show-toolbar-button="false"
                                 :show-update-action="false"
                                 :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.users.pages.orders.addOrder')"
                                 :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.users.pages.orders.addOrder')"
                                 :update-dialog-title="$vuetify.lang.t('$vuetify.pages.users.pages.orders.editOrder')"
                                 actions-suffix="Order"
                                 show-select>
    <template v-slot:dialog="{item}">
      <ikon-user-dialog :item="item"/>
    </template>
    <template v-slot:filter>
      <ikon-user-orders-filter/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import Order from '@/modules/users/models/order'

export default {
  name: 'IkonUserOrdersPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonUserDialog: () => import('@/modules/users/components/IkonUserDialog'),
    IkonUserOrdersFilter: () => import('@/modules/users/components/IkonUserOrdersFilter')
  },
  data () {
    return {
      headers: [],
      defaultItem: new Order(),
      key: this.$dayjs().toISOString()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.users.pages.orders.orderList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.users.pages.orders.deleteOrderText')
    },
    userId () {
      return this.$route.params.user_id
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
          text: this.$vuetify.lang.t('$vuetify.pages.users.pages.orders.dataTableHeaders.price'),
          align: 'start',
          value: 'price'
        },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.pages.orders.dataTableHeaders.status'), value: 'status' },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.pages.orders.dataTableHeaders.description'), value: 'description' },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.pages.orders.dataTableHeaders.acceptedMessage'), value: 'accepted_message' },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.pages.orders.dataTableHeaders.rejectedMessage'), value: 'rejected_message' },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.pages.orders.dataTableHeaders.canceledMessage'), value: 'canceled_message' },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.pages.orders.dataTableHeaders.paidAt'), value: 'paid_at' },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.pages.orders.dataTableHeaders.acceptedAt'), value: 'accepted_at' },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.pages.orders.dataTableHeaders.rejectedAt'), value: 'rejected_at' },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.pages.orders.dataTableHeaders.canceledAt'), value: 'canceled_at' },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.pages.orders.dataTableHeaders.createdAt'), value: 'created_at' },
        { text: this.$vuetify.lang.t('$vuetify.pages.users.pages.orders.dataTableHeaders.updatedAt'), value: 'updated_at' }
        // { text: this.$vuetify.lang.t('$vuetify.general.actions'), value: 'actions', sortable: false }
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
