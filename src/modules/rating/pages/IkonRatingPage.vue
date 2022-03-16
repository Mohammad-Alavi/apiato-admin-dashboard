<template>
  <ikon-data-table-page-template :data-table-title="getDataTableTitle"
                                 :default-item="defaultItem"
                                 :delete-dialog-title="getDeleteDialogTitle"
                                 :headers="headers"
                                 :show-delete-action="false"
                                 :show-toolbar-button="false"
                                 :show-update-action="false"
                                 :toolbar-button-dialog-title="$vuetify.lang.t('$vuetify.pages.ratings.addRating')"
                                 :toolbar-button-text="$vuetify.lang.t('$vuetify.pages.ratings.addRating')"
                                 :update-dialog-title="$vuetify.lang.t('$vuetify.pages.ratings.editRating')"
                                 actions-suffix="Rating"
                                 show-select>
    <template v-slot:custom-action-1="{item}">
      <ikon-data-table-rating-accept-action-button :rating="item"/>
    </template>
    <template v-slot:custom-action-2="{item}">
      <ikon-data-table-rating-reject-action-button :rating="item"/>
    </template>
    <template v-slot:filter>
      <ikon-rating-filter/>
    </template>
  </ikon-data-table-page-template>
</template>

<script>
import Rating from '@/modules/rating/models/rating'

export default {
  name: 'IkonRatingPage',
  components: {
    IkonDataTablePageTemplate: () => import('@/modules/app/templates/IkonDataTablePageTemplate'),
    IkonDataTableRatingAcceptActionButton: () => import('../components/IkonDataTableRatingAcceptActionButton'),
    IkonDataTableRatingRejectActionButton: () => import('../components/IkonDataTableRatingRejectActionButton'),
    IkonRatingFilter: () => import('../components/IkonRatingFilter')
  },
  data () {
    return {
      headers: [],
      defaultItem: new Rating()
    }
  },
  computed: {
    getDataTableTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.ratings.ratingList')
    },
    getDeleteDialogTitle () {
      return this.$vuetify.lang.t('$vuetify.pages.ratings.deleteRatingText')
    }
  },
  watch: {
    $route () {
      this.initialize()
    }
  },
  methods: {
    resetHeaders () {
      this.headers = [
        {
          text: this.$vuetify.lang.t('$vuetify.pages.ratings.dataTableHeaders.createdAt'),
          value: 'created_at',
          align: 'start',
          sortable: true
        },
        {
          text: this.$vuetify.lang.t('$vuetify.pages.ratings.dataTableHeaders.text'),
          value: 'text',
          sortable: true
        },
        {
          text: this.$vuetify.lang.t('$vuetify.pages.ratings.dataTableHeaders.score'),
          sortable: true,
          value: 'score'
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
