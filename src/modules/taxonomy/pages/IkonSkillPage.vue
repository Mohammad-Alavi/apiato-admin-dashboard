<template>
  <ikon-data-table-page-template :key="key"
                                  :data-table-title="getDataTableTitle"
                                  :default-item="defaultItem"
                                  :delete-dialog-title="getDeleteDialogTitle"
                                  :headers="headers"
                                  :show-toolbar-button="true"
                                  :show-delete-action="true"
                                  :show-update-action="true"
                                  :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.addSkill')"
                                  :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.addSkill')"
                                  :update-dialog-title="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.editSkill')"
                                  actions-suffix="Skill"
                                  show-select>
    <template v-slot:filter>
      <ikon-skill-filter/>
    </template>
    <template v-slot:add-dialog="{item}">
      <ikon-skill-dialog :item="item"/>
    </template>
    <template v-slot:edit-dialog="{item}">
      <ikon-skill-dialog :item="item"/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import Skill from '@/modules/taxonomy/models/skill'

export default {
  name: 'IkonSkillPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonSkillDialog: () => import('@/modules/taxonomy/components/IkonSkillDialog'),
    IkonSkillFilter: () => import('@/modules/taxonomy/components/IkonSkillFilter')
  },
  data () {
    return {
      headers: [],
      defaultItem: new Skill(),
      key: this.$dayjs().toISOString()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.skillList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.deleteSkillText')
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
        { text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.dataTableHeaders.name'), value: 'name', align: 'start' },
        { text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.dataTableHeaders.labelEn'), value: 'label_en' },
        { text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.dataTableHeaders.labelDe'), value: 'label_de' },
        { text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.dataTableHeaders.sport'), value: 'sport.name', sortable: false },
        { text: this.$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.dataTableHeaders.job'), value: 'job.name', sortable: false },
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
