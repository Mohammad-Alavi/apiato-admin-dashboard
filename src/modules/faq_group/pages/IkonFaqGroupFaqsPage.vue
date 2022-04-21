<template>
  <ikon-data-table-page-template :key="key"
                                 :data-table-title="getDataTableTitle"
                                 :default-item="defaultItem"
                                 :delete-dialog-title="getDeleteDialogTitle"
                                 :headers="headers"
                                 :get-all-action-additional-params="[`faq_group=${faq_group_id}`]"
                                 :order-by-override="{'faq_group.name': 'faq_groups|name'}"
                                 :row-pointer="true"
                                 :show-delete-action="false"
                                 :show-toolbar-button="false"
                                 :show-update-action="false"
                                 :sortable-data-table="true"
                                 :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.faqGroups.pages.faqs.addFaq')"
                                 :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.faqGroups.pages.faqs.addFaq')"
                                 :update-dialog-title="$vuetify.lang.t('$vuetify.pages.faqGroups.pages.faqs.editFaq')"
                                 actions-suffix="Faqs"
                                 show-select>
  </ikon-data-table-page-template>
</template>

<script>
import Faq from '@/modules/faq/models/faq'

export default {
  name: 'IkonFaqGroupFaqsPage',
  props: {
    faq_group_id: {
      required: true
    }
  },
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate')
  },
  data () {
    return {
      headers: [],
      defaultItem: new Faq(),
      key: this.$dayjs().toISOString()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.faqGroups.pages.faqs.faqList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.faqGroups.pages.faqs.deleteFaqText')
    }
  },
  watch: {
    $route () {
      this.repaintComponent()
      this.initialize()
    }
  },
  methods: {
    resetHeaders () {
      this.headers = [
        { text: this.$vuetify.lang.t('$vuetify.pages.faqGroups.pages.faqs.dataTableHeaders.order'), value: 'order', align: 'start' },
        { text: this.$vuetify.lang.t('$vuetify.pages.faqGroups.pages.faqs.dataTableHeaders.faqGroup'), value: 'faq_group.name', sortable: false },
        { text: this.$vuetify.lang.t('$vuetify.pages.faqGroups.pages.faqs.dataTableHeaders.questionEn'), value: 'question_en', sortable: false },
        { text: this.$vuetify.lang.t('$vuetify.pages.faqGroups.pages.faqs.dataTableHeaders.questionDe'), value: 'question_de', sortable: false },
        { text: this.$vuetify.lang.t('$vuetify.pages.faqGroups.pages.faqs.dataTableHeaders.answerEn'), value: 'answer_en', sortable: false },
        { text: this.$vuetify.lang.t('$vuetify.pages.faqGroups.pages.faqs.dataTableHeaders.answerDe'), value: 'answer_de', sortable: false },
        { text: this.$vuetify.lang.t('$vuetify.general.actions'), value: 'actions', sortable: false }
      ]
    },
    initialize () {
      this.resetHeaders()
    },
    repaintComponent () {
      this.key = this.$dayjs().toISOString()
    }
  },
  created () {
    this.initialize()
  }
}
</script>
