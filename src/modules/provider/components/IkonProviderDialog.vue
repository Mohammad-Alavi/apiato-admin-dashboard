<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Hourly Rate" rules="numeric" vid="hourly_rate">
          <v-text-field type="number" v-model="localItem.hourly_rate" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.providers.hourlyRate')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <v-row justify="end">
          <validation-provider v-slot="{ errors }" name="Published At" vid="gallery">
            <v-switch :error-messages="errors"
              v-model="localItem.published_at"
              :label="localItem.published_at ? $vuetify.lang.t('$vuetify.pages.providers.published'): $vuetify.lang.t('$vuetify.pages.providers.unpublished')"
            />
          </validation-provider>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12">
        <validation-provider v-slot="{ errors }" name="Description" rules="min:50|max:500" vid="description">
          <v-textarea rows="3" v-model="localItem.description" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.providers.description')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12">
        <ikon-autocomplete
          :deletable-chips="true"
          :display-function="languageDisplayMethod"
          :items="languages"
          rules=""
          :loading="fetchingLanguages"
          :multiple="true"
          :name="$vuetify.lang.t('$vuetify.pages.providers.languages')"
          :selected-items.sync="localItem.languages"
        />
      </v-col>
      <v-col cols="12">
        <ikon-autocomplete
          :deletable-chips="true"
          :display-function="taxonomyDisplayMethod"
          :items="sports"
          rules=""
          :loading="fetchingSports"
          :multiple="true"
          :name="$vuetify.lang.t('$vuetify.pages.providers.sports')"
          :selected-items.sync="localItem.sports"
        />
      </v-col>
      <v-col cols="12">
        <ikon-autocomplete
          :deletable-chips="true"
          :display-function="taxonomyDisplayMethod"
          :items="jobs"
          rules=""
          :loading="fetchingJobs"
          :multiple="true"
          :name="$vuetify.lang.t('$vuetify.pages.providers.jobs')"
          :selected-items.sync="localItem.jobs"
        />
      </v-col>
      <v-col cols="12">
        <ikon-autocomplete
          :disabled="!hadSportsAndJobs || sportsAndJobsChanged"
          :deletable-chips="true"
          :display-function="skillDisplayMethod"
          :items="skills"
          rules=""
          :loading="fetchingSkills"
          :multiple="true"
          :name="$vuetify.lang.t('$vuetify.pages.providers.skills')"
          :selected-items.sync="localItem.skills"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IkonProviderDialog',
  components: {
    IkonAutocomplete: () => import('@/modules/app/components/IkonAutocomplete')
  },
  data () {
    return {
      sports: [],
      fetchingSports: false,
      jobs: [],
      fetchingJobs: false,
      skills: [],
      fetchingSkills: false,
      hadSportsAndJobs: false,
      initialItem: null,
      languages: [],
      fetchingLanguages: false
    }
  },
  props: {
    item: {
      required: true
    }
  },
  watch: {
    sportsAndJobsChanged () {
      this.localItem.skills = []
    }
  },
  computed: {
    localItem: {
      get () {
        return this.item
      },
      set (v) {
        this.$emit('input', v)
      }
    },
    sportsAndJobsChanged () {
      if (this.$lodash.isNull(this.initialItem)) {
        return false
      }
      return !this.$lodash.isEqual(this.initialItem?.sports, this.localItem.sports) || !this.$lodash.isEqual(this.initialItem?.jobs, this.localItem.jobs)
    }
  },
  methods: {
    languageDisplayMethod (data) {
      return data.item.name
    },
    taxonomyDisplayMethod (data) {
      return data.item.name
    },
    skillDisplayMethod (data) {
      const sportName = data.item.sport ? data.item.sport.name : '_'
      return `${data.item.name} (${sportName}, ${data.item.job.name})`
    },
    prepareSkillFilter () {
      const filters = []
      filters.push(...this.localItem.sports.map(sport => `sports[]=${sport.name}`))
      filters.push(...this.localItem.jobs.map(job => `jobs[]=${job.name}`))

      return filters
    },
    getAllLanguages () {
      this.fetchingLanguages = true
      this.$store.dispatch('getAllLanguages', { withIncludes: false }).then(res => {
        this.languages = res.items
      }).finally(() => {
        this.fetchingLanguages = false
      })
    },
    getAllSports () {
      this.fetchingSports = true
      this.$store.dispatch('getAllSports', { withIncludes: false }).then(res => {
        this.sports = res.items
      }).finally(() => {
        this.fetchingSports = false
        this.getAllJobs()
      })
    },
    getAllJobs () {
      this.fetchingJobs = true
      this.$store.dispatch('getAllJobs', { withIncludes: false }).then(res => {
        this.jobs = res.items
      }).finally(() => {
        this.fetchingJobs = false
        this.getAllSkills()
      })
    },
    getAllSkills () {
      this.fetchingSkills = true
      this.$store.dispatch('getAllSkills', { withIncludes: false, additionalParams: this.prepareSkillFilter() }).then(res => {
        this.skills = res.items
      }).finally(() => {
        this.fetchingSkills = false
      })
    }
  },
  created () {
    this.getAllLanguages()
    this.getAllSports()
    this.hadSportsAndJobs = !!this.localItem.sports.length && !!this.localItem.jobs.length
    this.initialItem = this.$lodash.cloneDeep(this.item)
  }
}
</script>
