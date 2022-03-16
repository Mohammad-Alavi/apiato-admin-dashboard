<template>
  <v-container fluid>
    <v-row class="align-content-space-between mb-5">
      <!--      <v-col>-->
      <!--        <ikon-data-export :data="selectedItems" :headers="prepareHeadersForExport()"/>-->
      <!--      </v-col>-->
      <v-col class="text-end">
        <ikon-user-options/>
      </v-col>
    </v-row>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <v-form @submit.prevent="submit">
        <v-data-table v-model="selectedItems" v-sortable-data-table="sortableDataTable"
                      :class="{'row-pointer': rowPointer}"
                      :disable-sort="loadingDataTable || disableSort"
                      :headers="headers"
                      :items="items"
                      :items-per-page="options.itemsPerPage"
                      :loading="loadingDataTable"
                      :options.sync="options"
                      :page.sync="options.page"
                      :server-items-length="totalPages"
                      class="elevation-1"
                      hide-default-footer
                      item-key="id"
                      v-bind="$attrs"
                      @sorted="saveOrder">
          <v-progress-linear v-if="loadingDataTable" absolute indeterminate/>
          <template v-slot:top>
            <ikon-data-table-toolbar :title="dataTableTitle">
              <template v-slot:search>
                <ikon-search-box :loading="isSearching" :search-query.sync="searchQuery"/>
              </template>
              <slot name="filter"/>
              <ikon-data-table-dialog-action-button
                v-if="showToolbarButton"
                :key="dialogKey + 111111"
                :buttonText="toolbarButtonText"
                :dialogTitle="toolbarButtonDialogTitle"
                :disabled="invalid"
                :loading="doingCRUDOperations"
                mode="add"
                @cancel="resetSelectedItem"
                @confirm="save($event)"
                @dialog-open="resetSelectedItem(false)">
                <slot :item="selectedItem" name="dialog"/>
              </ikon-data-table-dialog-action-button>
            </ikon-data-table-toolbar>
          </template>

          <!--          <template v-slot:item.enabled="{ item }">-->
          <!--            <v-progress-circular v-if="updatingStatus && updatingStatus === item.id" color="info"-->
          <!--                                 indeterminate/>-->
          <!--            <a v-else @click="updateItem(item)">-->
          <!--              {{-->
          <!--                item.enabled ? $vuetify.lang.t('$vuetify.general.enable') : $vuetify.lang.t('$vuetify.general.disable')-->
          <!--              }}-->
          <!--            </a>-->
          <!--          </template>-->

          <!--          <template v-slot:item.ids_of_groups_staff_is_admin_in="{ item }">-->
          <!--            <v-progress-circular v-if="updatingAdminStatus && updatingAdminStatus === item.id" color="info"-->
          <!--                                 indeterminate/>-->
          <!--            <a v-else @click="updateAdministrativeStatus(item)">-->
          <!--              {{-->
          <!--                item.isAdminInGroup(getSinglePageGroupId) ? $vuetify.lang.t('$vuetify.general.yes') : $vuetify.lang.t('$vuetify.general.no')-->
          <!--              }}-->
          <!--            </a>-->
          <!--          </template>-->

          <template v-slot:item.actions="{ item }">

            <ikon-data-table-dialog-action-button
              v-if="showUpdateAction"
              :key="dialogKey + 9999999"
              :dialogTitle="updateDialogTitle"
              :disabled="invalid"
              :item="item"
              :loading="doingCRUDOperations"
              mode="edit"
              @cancel="resetSelectedItem"
              @confirm="save($event)"
              @dialog-open="setSelectedItem(item)">
              <slot :item="selectedItem" name="dialog"/>
            </ikon-data-table-dialog-action-button>

            <ikon-data-table-dialog-action-button
              v-if="showDeleteAction"
              :dialogTitle="deleteDialogTitle"
              :item="item"
              :loading="doingCRUDOperations"
              mode="delete"
              @cancel="resetSelectedItem"
              @confirm="deleteItem($event)"
              @dialog-open="setSelectedItem(item)"/>

            <event-listener @data-changed="getAllData">
              <span>
                <slot :item="item" name="custom-action-1"/>
                <slot :item="item" name="custom-action-2"/>
              </span>
            </event-listener>
          </template>
        </v-data-table>
      </v-form>
    </validation-observer>
    <v-row align="center" class="mt-3">
      <v-col class="text-start">
        <v-card flat>
          <v-card-text>
            {{ $vuetify.lang.t('$vuetify.general.page') }} {{ options.page }}
            {{ $vuetify.lang.t('$vuetify.general.of') }} {{ totalPages }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="10" lg="9" md="7" sm="6" xl="10">
        <v-pagination v-model="options.page" :length="totalPages" total-visible="7"/>
      </v-col>
      <v-col>
        <v-select v-model="options.itemsPerPage" :items="[1, 2, 10,25,50,100]"
                  :label="$vuetify.lang.t('$vuetify.general.itemsPerPage')" dense hide-details outlined
                  persistent-hint/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import Sortable from 'sortablejs'

export default {
  name: 'IkonDataTablePageTemplate',
  inheritAttrs: false,
  components: {
    IkonDataTableDialogActionButton: () => import('@/modules/app/components/IkonDataTableDialogActionButton'),
    IkonDataTableToolbar: () => import('@/modules/app/components/IkonDataTableToolbar'),
    // IkonDataExport: () => import('@/modules/app/components/IkonDataExport'),
    IkonUserOptions: () => import('@/modules/app/components/IkonUserOptions'),
    IkonSearchBox: () => import('@/modules/app/components/IkonSearchBox'),
    EventListener: () => import('@/modules/app/components/EventListener'),
    ValidationObserver
  },
  props: {
    headers: {
      type: Array,
      required: true
    },
    dataTableTitle: {
      type: String,
      required: true,
      default: 'List'
    },
    defaultItem: {
      type: Object,
      required: true
    },
    orderByOverride: {
      type: Object,
      required: false
    },
    showToolbarButton: {
      type: Boolean,
      default: true
    },
    showDeleteAction: {
      type: Boolean,
      default: true
    },
    showUpdateAction: {
      type: Boolean,
      default: true
    },
    rowPointer: {
      type: Boolean,
      default: false
    },
    sortableDataTable: {
      type: Boolean,
      default: false
    },
    toolbarButtonDialogTitle: {
      type: String
    },
    toolbarButtonText: {
      type: String
    },
    deleteDialogTitle: {
      type: String
    },
    updateDialogTitle: {
      type: String
    },
    actionsSuffix: {
      type: String,
      required: true
    },
    getAllActionAdditionalParams: {
      type: Array,
      required: false,
      default: undefined
    },
    initialSortByColumn: {
      type: String,
      required: false
    },
    disableSort: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectedItemIndex: -1,
      selectedItem: null,
      loadingDataTable: true,
      items: [],
      selectedItems: [],
      totalPages: 0,
      actions: {
        create: 'create',
        update: 'update',
        delete: 'delete',
        getAll: 'getAll'
      },
      doingCRUDOperations: false,
      updatingStatus: -1,
      updatingAdminStatus: -1,
      closeDialogMethod: undefined,
      options: {
        sortBy: [],
        sortDesc: [false],
        mustSort: true,
        page: 1,
        itemsPerPage: 10
      },
      searchQuery: '',
      isSearching: false,
      debounceTimeout: null,
      dialogKey: new Date().getTime()
    }
  },
  computed: {
    isEditing () {
      return this.selectedItemIndex > -1
    },
    getSinglePageGroupId () {
      return this.$route.params.group_id
    },
    firstHeaderColumnValue () {
      return this.headers[0].value
    },
    getDataTableTitle () {
      return typeof this.isSearching === 'string' ? this.isSearching : ''
    },
    filterDialogFilters () {
      return this.$store.state.filter
    },
    isUsersPage () {
      return this.$route.name === 'users'
    },
    showFilter () {
      return this.isUsersPage
    }
  },
  watch: {
    showToolbarButton: {
      handler (value) {
        this.validateProp(value, 'toolbarButtonDialogTitle')
        this.validateProp(value, 'toolbarButtonText')
      },
      immediate: true
    },
    filterDialogFilters: 'getAllData',
    showDeleteAction: {
      handler (value) {
        this.validateProp(value, 'deleteDialogTitle')
      },
      immediate: true
    },
    showEditAction: {
      handler (value) {
        this.validateProp(value, 'updateDialogTitle')
      },
      immediate: true
    },
    options: {
      handler: 'getAllData',
      deep: true
    },
    searchQuery: function () {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout)
      }

      this.debounceTimeout = setTimeout(() => {
        this.isSearching = true
        this.getAllData()
      }, 1000)
    }
  },
  methods: {
    validateProp (value, propName) {
      if (value && typeof this[propName] === 'undefined') {
        console.error(`"property ${propName} is required."`)
      }
    },
    setSelectedItem (item) {
      this.selectedItemIndex = this.items.indexOf(item)
      this.selectedItem = this.$lodash.cloneDeep(item)
    },
    save (closeMethod) {
      this.closeDialogMethod = closeMethod
      this.doingCRUDOperations = true

      if (this.isEditing) {
        this.updateItem()
      } else {
        this.createItem()
      }
    },
    createItem () {
      this.$store.dispatch(this.prepareActionName(this.actions.create), { ...this.selectedItem })
        .then(() => this.cleanupAfterSuccessfulCRUDOperation())
        .catch(res => {
          this.setServerErrorsOnFormFields(res)
        }).finally(() => {
          this.doingCRUDOperations = false
        })
    },
    updateItem (item) {
      let payload = null

      if (item) {
        this.updatingStatus = item.id
        payload = { id: item.id, enabled: !item.enabled }
      } else {
        payload = { ...this.selectedItem }
      }

      this.$store.dispatch(this.prepareActionName(this.actions.update), payload)
        .then(() => this.cleanupAfterSuccessfulCRUDOperation())
        .catch(res => {
          this.setServerErrorsOnFormFields(res)
        }).finally(() => {
          this.doingCRUDOperations = false
          this.updatingStatus = -1
        })
    },
    setServerErrorsOnFormFields (res) {
      if (res.response.data.errors) {
        const errors = res.response.data.errors
        const errorObject = {}
        Object.entries(errors).forEach(([k, v]) => {
          errorObject[k] = v
        })
        this.$refs.observer.setErrors(errorObject)
      }
    },
    deleteItem (closeMethod) {
      this.doingCRUDOperations = true
      this.closeDialogMethod = closeMethod
      this.deleteSelectedItem()
    },
    deleteSelectedItem () {
      this.$store.dispatch(this.prepareActionName(this.actions.delete), { ...this.selectedItem })
        .then(() => this.cleanupAfterSuccessfulCRUDOperation())
        .finally(() => {
          this.doingCRUDOperations = false
        })
    },
    updateAdministrativeStatus (item) {
      const isAdmin = !item.isAdminInGroup(this.getSinglePageGroupId)
      const members = {
        ...(!isAdmin && { member_ids: [item.id] }),
        ...(isAdmin && { admin_ids: [item.id] })
      }
      const payload = {
        id: this.getSinglePageGroupId,
        ...members
      }
      this.addGroupMember(payload)
    },
    /// ////////////////////////////////

    resetSelectedItem (changeComponentKey = true) {
      this.selectedItem = this.$lodash.cloneDeep(this.defaultItem)
      this.selectedItemIndex = -1
      if (changeComponentKey) {
        this.dialogKey++
      }
    },
    cleanupAfterSuccessfulCRUDOperation () {
      if (this.closeDialogMethod) {
        this.closeDialogMethod()
      }
      this.getAllData()
      this.resetSelectedItem()
    },
    prepareHeadersForExport () {
      const headers = []
      this.headers.forEach(header => {
        headers[headers.length] = header.text
      })
      return headers
    },
    prepareActionName (action) {
      if (action === this.actions.getAll) {
        return action + this.$pluralize(this.$lodash.startCase(this.actionsSuffix), 2)
      } else return action + this.$lodash.startCase(this.actionsSuffix)
    },
    getAllData () {
      const { sortBy: orderBy, sortDesc, itemsPerPage: perPage, page: currentPage } = this.options
      this.loadingDataTable = true

      this.$store.dispatch(this.prepareActionName(this.actions.getAll), {
        perPage,
        currentPage,
        withIncludes: true,
        orderBy: this.overrodeOrderBy(orderBy) ?? orderBy,
        sortedBy: sortDesc[0] ? 'desc' : 'asc',
        searchQuery: this.searchQuery,
        additionalParams: this.combinedFiltersAndParams()
      }).then((res) => {
        this.items = res.items
        if (this.currentPage > res.pagination.total_pages) {
          this.currentPage = 1
        }
        this.totalPages = res.pagination.total_pages
        this.loadingDataTable = false
        this.isSearching = false
      })
    },
    overrodeOrderBy (orderBy) {
      const overrodeOrderBy = orderBy
      if (this.orderByOverride) {
        for (let i = 0; i < orderBy.length; i++) {
          Object.entries(this.orderByOverride).forEach(([k, v]) => {
            if (overrodeOrderBy[i] === k) {
              overrodeOrderBy[i] = v
            }
          })
        }

        return this.$lodash.uniq(overrodeOrderBy)
      } else return null
    },
    // TODO this should be encapsulated somewhere else, maybe in filter parent component or in actionHelper?
    combinedFiltersAndParams () {
      const filters = this.$store.state.filter
      const params = this.getAllActionAdditionalParams ?? []

      const rolesFilter = []
      if (!this.$lodash.isNil(filters)) {
        if (!this.$lodash.isNil(filters.isAdmin)) {
          rolesFilter.push('roles[]=admin:' + filters.isAdmin)
        }
        if (!this.$lodash.isNil(filters.isProvider)) {
          rolesFilter.push('roles[]=provider:' + filters.isProvider)
        }
        if (!this.$lodash.isNil(filters.isEmailVerified)) {
          rolesFilter.push('email=' + filters.isEmailVerified)
        }
        if (!this.$lodash.isNil(filters.allProviders)) {
          rolesFilter.push('all=' + filters.allProviders)
        }
        if (!this.$lodash.isNil(filters.allRequests)) {
          rolesFilter.push('all=' + filters.allRequests)
        }
        if (!this.$lodash.isNil(filters.orderStatus)) {
          rolesFilter.push('status=' + filters.orderStatus)
        }
        if (!this.$lodash.isNil(filters.skillSports)) {
          filters.skillSports.forEach(sport => rolesFilter.push('sports[]=' + sport.name))
        }
        if (!this.$lodash.isNil(filters.skillJobs)) {
          filters.skillJobs.forEach(job => rolesFilter.push('jobs[]=' + job.name))
        }
        if (!this.$lodash.isNil(filters.isRatingReviewed)) {
          rolesFilter.push('is_reviewed=' + filters.isRatingReviewed)
        }
        if (!this.$lodash.isNil(filters.isRatingAccepted)) {
          rolesFilter.push('is_accepted=' + filters.isRatingAccepted)
        }
      }

      return params.concat(rolesFilter)
    },
    submit () {
      this.$refs.observer.validate()
    },
    saveOrder (event) {
      // reference
      // https://stackoverflow.com/questions/64272786/how-can-i-reorder-the-items-in-a-vuetify-data-table-by-dragging-the-rows
      const movedItem = this.items.splice(event.oldIndex, 1)[0]
      const itemToBeReplaced = this.items[event.newIndex] ?? this.items[event.newIndex - 1]

      let order = null
      const itemToBeReplacedOrder = itemToBeReplaced.object === 'Provider' ? itemToBeReplaced.orderInSlider(this.$route.params.slider_id) : itemToBeReplaced.order

      if ((itemToBeReplacedOrder > movedItem.order && (event.newIndex < this.items.length))) {
        if (itemToBeReplacedOrder === 0) {
          order = itemToBeReplacedOrder
        } else {
          order = itemToBeReplacedOrder - 1
        }
      } else {
        order = itemToBeReplacedOrder
      }

      this.doingCRUDOperations = true
      this.loadingDataTable = true
      this.$store.dispatch(this.prepareActionName('reorder'), { id: movedItem.id, order: order })
        .then(() => {
          this.getAllData()
        }).finally(() => {
          this.loadingDataTable = false
          this.doingCRUDOperations = false
        })
        // this.items.splice(event.newIndex, 0, movedItem)
    }
  },
  // this is a working piece of code without much customization for ikon project
  //   saveOrder (event) {
  //     // reference
  //     // https://stackoverflow.com/questions/64272786/how-can-i-reorder-the-items-in-a-vuetify-data-table-by-dragging-the-rows
  //     const movedItem = this.items.splice(event.oldIndex, 1)[0]
  //     const itemToBeReplaced = this.items[event.newIndex] ?? this.items[event.newIndex - 1]
  //
  //     let order = null
  //     if ((itemToBeReplaced.order > movedItem.order && (event.newIndex < this.items.length))) {
  //       if (itemToBeReplaced.order === 0) {
  //         order = itemToBeReplaced.order
  //       } else {
  //         order = itemToBeReplaced.order - 1
  //       }
  //     } else {
  //       order = itemToBeReplaced.order
  //     }
  //
  //     this.doingCRUDOperations = true
  //     this.loadingDataTable = true
  //     this.$store.dispatch(this.prepareActionName('reorder'), { id: movedItem.id, order: order })
  //       .then(() => {
  //         this.getAllData()
  //       }).finally(() => {
  //         this.loadingDataTable = false
  //         this.doingCRUDOperations = false
  //       })
  //     // this.items.splice(event.newIndex, 0, movedItem)
  //   }
  // },
  directives: {
    sortableDataTable: {
      bind (el, binding, vnode) {
        // eslint-disable-next-line no-prototype-builtins
        if ((!binding.hasOwnProperty('value')) || binding.value) {
          const options = {
            animation: 150,
            onUpdate: function (event) {
              vnode.child.$emit('sorted', event)
            }
          }
          Sortable.create(el.getElementsByTagName('tbody')[0], options)
        }
      }
    }
  },
  created () {
    this.options.sortBy = [this.initialSortByColumn ? this.initialSortByColumn : this.firstHeaderColumnValue]
    this.getAllData()
  },
  mounted () {
    this.resetSelectedItem()
  }
}
</script>

<style lang="css" scoped>
.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}
</style>
