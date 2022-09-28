<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Hourly Rate" rules="double" vid="hourly_rate">
          <v-text-field v-model="localItem.hourly_rate" :disabled="isLoadingData" :error-messages="errors"
                        :label="$vuetify.lang.t('$vuetify.pages.providers.hourlyRate')"
                        type="number"/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <v-row justify="start">
          <validation-provider v-slot="{ errors }" name="Published At" vid="gallery">
            <v-switch v-model="localItem.published"
                      :disabled="isLoadingData"
                      :error-messages="errors"
                      :false-value="0"
                      :label="localItem.published ? $vuetify.lang.t('$vuetify.pages.providers.published'): $vuetify.lang.t('$vuetify.pages.providers.unpublished')"
                      :loading="isLoadingData"
                      :true-value="1"
            />
          </validation-provider>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12">
        <validation-provider v-slot="{ errors }" name="Description" rules="min:50|max:500" vid="description">
          <v-textarea v-model="localItem.description" :disabled="isLoadingData" :error-messages="errors"
                      :label="$vuetify.lang.t('$vuetify.pages.providers.description')"
                      rows="3"/>
        </validation-provider>
      </v-col>
      <v-col cols="12">
        <ikon-autocomplete
          :deletable-chips="true"
          :display-function="languageDisplayMethod"
          :items="languages"
          :loading="fetchingLanguages"
          :multiple="true"
          :name="$vuetify.lang.t('$vuetify.pages.providers.languages')"
          :selected-items.sync="localItem.languages"
          rules=""
          vid="language"
        />
      </v-col>
      <v-col cols="12">
        <ikon-autocomplete
          :deletable-chips="true"
          :display-function="categoryDisplayMethod"
          :items="categories"
          :loading="fetchingCategories"
          :multiple="true"
          :name="$vuetify.lang.t('$vuetify.pages.providers.categories')"
          :selected-items.sync="localItem.categories"
          rules=""
          vid="category"
        />
      </v-col>
      <v-col cols="12">
        <ikon-autocomplete
          :deletable-chips="true"
          :display-function="specializationDisplayMethod"
          :items="specializations"
          :loading="fetchingSpecializations"
          :multiple="true"
          :name="$vuetify.lang.t('$vuetify.pages.providers.specializations')"
          :selected-items.sync="localItem.specializations"
          rules=""
          vid="specialization"
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
  inject: ['serverErrors'],
  data () {
    return {
      categories: [],
      fetchingCategories: false,
      specializations: [],
      fetchingSpecializations: false,
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
      this.$store.dispatch('getAllSpecializations', {
        withIncludes: false,
        additionalParams: this.prepareSpecializationsFilter()
      }).then(res => {
        this.specializations = res.items
      }).finally(() => {
        this.fetchingSpecializations = false
      })
    }
  },
  created () {
    this.getAllLanguages()
    this.getAllCategories()
    this.initialItem = this.$lodash.cloneDeep(this.item)
    this.localItem.published = this.$lodash.isNil(this.initialItem.published_at) ? 0 : 1
  }
}
</script>
