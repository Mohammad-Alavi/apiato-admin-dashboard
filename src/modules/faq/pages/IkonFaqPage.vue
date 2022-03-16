<template>
  <ikon-data-table-page-template :key="key"
                                  :data-table-title="getDataTableTitle"
                                  :default-item="defaultItem"
                                  :delete-dialog-title="getDeleteDialogTitle"
                                  :headers="headers"
                                  :show-toolbar-button="true"
                                  :show-delete-action="true"
                                  :show-update-action="true"
                                  :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.faqs.addFaq')"
                                  :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.faqs.addFaq')"
                                  :update-dialog-title="$vuetify.lang.t('$vuetify.pages.faqs.editFaq')"
                                  actions-suffix="Faq"
                                  :row-pointer="true"
                                  :sortable-data-table="true"
                                  show-select>
    <template v-slot:dialog="{item}">
      <ikon-faq-dialog :item="item"/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import Faq from '@/modules/faq/models/faq'

export default {
  name: 'IkonFaqPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonFaqDialog: () => import('@/modules/faq/components/IkonFaqDialog')
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
      return this.$vuetify.lang.t('$vuetify.pages.faqs.faqList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.faqs.deleteFaqText')
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
        { text: this.$vuetify.lang.t('$vuetify.pages.faqs.dataTableHeaders.order'), value: 'order', align: 'start' },
        { text: this.$vuetify.lang.t('$vuetify.pages.faqs.dataTableHeaders.questionEn'), value: 'question_en' },
        { text: this.$vuetify.lang.t('$vuetify.pages.faqs.dataTableHeaders.questionDe'), value: 'question_de' },
        { text: this.$vuetify.lang.t('$vuetify.pages.faqs.dataTableHeaders.answerEn'), value: 'answer_en' },
        { text: this.$vuetify.lang.t('$vuetify.pages.faqs.dataTableHeaders.answerDe'), value: 'answer_de' },
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
