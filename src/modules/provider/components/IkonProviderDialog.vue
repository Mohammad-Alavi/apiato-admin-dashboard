<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Hourly Rate" rules="numeric" vid="hourly_rate">
          <v-text-field :disabled="isLoadingData" type="number" v-model="localItem.hourly_rate" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.providers.hourlyRate')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <v-row justify="start">
          <validation-provider v-slot="{ errors }" name="Published At" :vid="getPublishedAtError">
            <v-switch :error-messages="errors"
                      :disabled="isLoadingData"
              v-model="localItem.published_at"
              :label="localItem.published_at ? $vuetify.lang.t('$vuetify.pages.providers.published'): $vuetify.lang.t('$vuetify.pages.providers.unpublished')"
            />
          </validation-provider>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12">
        <validation-provider v-slot="{ errors }" name="Description" rules="min:50|max:500" vid="description">
          <v-textarea :disabled="isLoadingData" rows="3" v-model="localItem.description" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.providers.description')"/>
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
          :display-function="categoryDisplayMethod"
          :items="categories"
          rules=""
          :loading="fetchingCategories"
          :multiple="true"
          :name="$vuetify.lang.t('$vuetify.pages.providers.categories')"
          :selected-items.sync="localItem.categories"
        />
      </v-col>
      <v-col cols="12">
        <ikon-autocomplete
          :deletable-chips="true"
          :display-function="specializationDisplayMethod"
          :items="specializations"
          rules=""
          :loading="fetchingSpecializations"
          :multiple="true"
          :name="$vuetify.lang.t('$vuetify.pages.providers.specializations')"
          :selected-items.sync="localItem.specializations"
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
      categories: [],
      fetchingCategories: false,
      specializations: [],
      fetchingSpecializations: false,
      hadCategoriesAndSpecialization: false,
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
    categoriesChanged () {
      this.getAllSpecializations()
      this.localItem.specializations = []
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
    categoriesChanged () {
      if (this.$lodash.isNull(this.initialItem)) {
        return false
      }
      this.getAllSpecializations()
      return !this.$lodash.isEqual(this.initialItem?.categories, this.localItem.categories)
    },
    getPublishedAtError () {
      if (this.item.gallery.images.length === 0) {
        return 'gallery'
      } else if (this.item.languages.length === 0) {
        return 'language'
      } else if (this.item.categories.length === 0) {
        return 'category'
      } else {
        return ''
      }
    },
    isLoadingData () {
      return this.fetchingCategories || this.fetchingSpecializations || this.fetchingLanguages
    }
  },
  methods: {
    languageDisplayMethod (data) {
      return data.item.name
    },
    categoryDisplayMethod (data) {
      return data.item.label_en
    },
    specializationDisplayMethod (data) {
      return data.item.label_en
    },
    prepareSpecializationsFilter () {
      const filters = []
      filters.push(...this.localItem.categories.map(category => `category_ids[]=${category.id}`))

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
    getAllCategories () {
      this.fetchingCategories = true
      this.$store.dispatch('getAllCategories', { withIncludes: false }).then(res => {
        this.categories = res.items
      }).finally(() => {
        this.fetchingCategories = false
        this.getAllSpecializations()
      })
    },
    getAllSpecializations () {
      this.fetchingSpecializations = true
      this.$store.dispatch('getAllSpecializations', { withIncludes: false, additionalParams: this.prepareSpecializationsFilter() }).then(res => {
        this.specializations = res.items
      }).finally(() => {
        this.fetchingSpecializations = false
      })
    }
  },
  created () {
    this.getAllLanguages()
    this.getAllCategories()
    this.hadCategoriesAndSpecialization = !!this.localItem.categories.length && !!this.localItem.specializations.length
    this.initialItem = this.$lodash.cloneDeep(this.item)
  }
}
</script>
