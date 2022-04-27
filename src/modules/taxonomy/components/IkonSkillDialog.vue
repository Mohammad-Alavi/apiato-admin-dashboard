<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Name" rules="required|min:2|max:700" vid="name">
          <v-text-field v-model="localItem.name" :error-messages="errors"
                        :label="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.name')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Label (EN)" rules="required|min:2|max:700" vid="label_en">
          <v-text-field v-model="localItem.label_en" :error-messages="errors"
                        :label="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.labelEn')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Label (DE)" rules="required|min:2|max:700" vid="label_de">
          <v-text-field v-model="localItem.label_de" :error-messages="errors"
                        :label="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.labelDe')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12">
        <ikon-autocomplete
          :deletable-chips="true"
          :display-function="taxonomyDisplayMethod"
          :items="sports"
          :loading="fetchingSports"
          :multiple="false"
          :name="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.sport')"
          :selected-items.sync="localItem.sport"
          rules=""
        ></ikon-autocomplete>
      </v-col>
      <v-col cols="12">
        <ikon-autocomplete
          :deletable-chips="true"
          :display-function="taxonomyDisplayMethod"
          :items="jobs"
          :loading="fetchingJobs"
          :multiple="false"
          :name="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.skills.job')"
          :selected-items.sync="localItem.job"
          rules=""
        ></ikon-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IkonSkillDialog',
  components: {
    IkonAutocomplete: () => import('@/modules/app/components/IkonAutocomplete')
  },
  props: {
    item: {
      required: true
    }
  },
  data () {
    return {
      textAreaRows: 2,
      sports: [],
      jobs: [],
      fetchingSports: false,
      fetchingJobs: false
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
    }
  },
  methods: {
    taxonomyDisplayMethod (data) {
      return data.item.name
    },
    getAllSports () {
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
    this.getAllSports()
    this.getAllJobs()
  }
}
</script>
