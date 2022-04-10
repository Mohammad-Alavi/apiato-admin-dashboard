<template>
  <ikon-data-table-page-template :key="key"
                                  :data-table-title="getDataTableTitle"
                                  :default-item="defaultItem"
                                  :delete-dialog-title="getDeleteDialogTitle"
                                  :headers="headers"
                                  :show-toolbar-button="true"
                                  :show-delete-action="true"
                                  :show-update-action="true"
                                  :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.faqGroups.addFaqGroup')"
                                  :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.faqGroups.addFaqGroup')"
                                  :update-dialog-title="$vuetify.lang.t('$vuetify.pages.faqGroups.editFaqGroup')"
                                  actions-suffix="FaqGroup"
                                  :row-pointer="true"
                                  :sortable-data-table="true"
                                  show-select>
    <template v-slot:add-dialog="{item}">
      <ikon-faq-group-dialog :item="item"/>
    </template>
    <template v-slot:edit-dialog="{item}">
      <ikon-faq-group-dialog :item="item"/>
    </template>
    <template v-slot:delete-dialog="{item}">
      <ikon-faq-group-delete-dialog :item="item"/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import FaqGroup from '@/modules/faq_group/models/faq_group'

export default {
  name: 'IkonFaqGroupPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonFaqGroupDialog: () => import('@/modules/faq_group/components/IkonFaqGroupDialog'),
    IkonFaqGroupDeleteDialog: () => import('@/modules/faq_group/components/IkonFaqGroupDeleteDialog')
  },
  data () {
    return {
      headers: [],
      defaultItem: new FaqGroup(),
      key: this.$dayjs().toISOString()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.faqGroups.faqGroupList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.faqGroups.deleteFaqGroupText')
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
        { text: this.$vuetify.lang.t('$vuetify.pages.faqGroups.dataTableHeaders.order'), value: 'order', align: 'start' },
        { text: this.$vuetify.lang.t('$vuetify.pages.faqGroups.dataTableHeaders.name'), value: 'name' },
        { text: this.$vuetify.lang.t('$vuetify.pages.faqGroups.dataTableHeaders.labelEn'), value: 'label_en' },
        { text: this.$vuetify.lang.t('$vuetify.pages.faqGroups.dataTableHeaders.labelDe'), value: 'label_de' },
        { text: this.$vuetify.lang.t('$vuetify.pages.faqGroups.dataTableHeaders.faqCount'), value: 'faq_count' },
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
