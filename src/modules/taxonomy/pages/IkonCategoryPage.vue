<template>
  <ikon-data-table-page-template :key="key"
                                 :data-table-title="getDataTableTitle"
                                 :default-item="defaultItem"
                                 :delete-dialog-title="getDeleteDialogTitle"
                                 :headers="headers"
                                 :show-delete-action="true"
                                 :show-toolbar-button="true"
                                 :show-update-action="true"
                                 :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.categories.addCategory')"
                                 :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.categories.addCategory')"
                                 :update-dialog-title="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.categories.editCategory')"
                                 actions-suffix="Category"
                                 row-pointer
                                 show-select
                                 sortable-data-table>
    <template v-slot:add-dialog="{item}">
      <ikon-category-dialog :item="item"/>
    </template>
    <template v-slot:edit-dialog="{item}">
      <ikon-category-dialog :item="item"/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import Category from '@/modules/taxonomy/models/category'

export default {
  name: 'IkonCategoryPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonCategoryDialog: () => import('@/modules/taxonomy/components/IkonCategoryDialog')
  },
  data () {
    return {
      headers: [],
      defaultItem: new Category(),
      key: this.$dayjs().toISOString()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.categories.categoryList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.categories.deleteCategoryText')
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
          text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.categories.dataTableHeaders.order'),
          value: 'sort_order',
          align: 'start'
        },
        {
          text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.categories.dataTableHeaders.labelEn'),
          value: 'label_en'
        },
        {
          text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.categories.dataTableHeaders.labelDe'),
          value: 'label_de'
        },
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
