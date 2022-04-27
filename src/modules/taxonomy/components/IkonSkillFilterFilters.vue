<template>
  <v-row justify="center" no-gutters>
    <v-col class="text-start ps-5 pa-3" cols="12">
      <p class="my-auto text-left text-subtitle-1">
        {{
          $vuetify.lang.t('$vuetify.pages.users.pages.orders.filter.filterOrdersTitle')
        }}
      </p>
    </v-col>
    <v-col cols="10">
      <ikon-autocomplete
        :items="sports"
        rules=""
        :display-function="taxonomyDisplayMethod"
        :name="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.sport')"
        :selected-items.sync="localItem.skillSports"
      />
    </v-col>
    <v-col cols="10">
      <ikon-autocomplete
        :items="jobs"
        rules=""
        :display-function="taxonomyDisplayMethod"
        :name="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.job')"
        :selected-items.sync="localItem.skillJobs"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IkonSkillFilterFilters',
  components: {
    IkonAutocomplete: () => import('@/modules/app/components/IkonAutocomplete')
  },
  data () {
    return {
      sports: [],
      jobs: [],
      fetchingSports: false,
      fetchingJobs: false
    }
  },
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  computed: {
    localItem: {
      get () {
        return this.filter
      },
      set (v) {
        this.$emit('update:filter', v)
      }
    }
  },
  methods: {
    taxonomyDisplayMethod (data) {
      return data.item.name
    },
    getAllSport () {
      this.fetchingSports = true
      this.$store.dispatch('getAllSports', { withIncludes: false }).then(res => {
        this.sports = res.items
      }).finally(() => {
        this.fetchingSports = false
      })
    },
    getAllJobs () {
      this.fetchingJobs = true
      this.$store.dispatch('getAllJobs', { withIncludes: false }).then(res => {
        this.jobs = res.items
      }).finally(() => {
        this.fetchingJobs = false
      })
    }
  },
  created () {
    this.getAllSport()
    this.getAllJobs()
  }
}
</script>

<style lang="scss">
.role-label {
  min-width: 100px;
}
</style>
