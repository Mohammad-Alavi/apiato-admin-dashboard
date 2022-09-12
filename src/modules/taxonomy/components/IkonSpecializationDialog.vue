<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Label (EN)" rules="required|min:2|max:20" vid="label_en">
          <v-text-field v-model="localItem.label_en" :error-messages="errors"
                        :label="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.specializations.labelEn')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Label (DE)" rules="required|min:2|max:20" vid="label_de">
          <v-text-field v-model="localItem.label_de" :error-messages="errors"
                        :label="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.specializations.labelDe')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12">
        <ikon-autocomplete
          :deletable-chips="true"
          :disabled="crudMode === CRUD_MODE.edit"
          :display-function="categoryDisplayMethod"
          :filter="categoryFilterByLabelEnMethod"
          :items="categories"
          :loading="fetchingCategories"
          :multiple="true"
          :name="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.specializations.categories')"
          :selected-items.sync="localItem.categories"
          rules="required|min:1"
        ></ikon-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { CRUD_MODE } from '@/modules/app/constants/crud-modes'

export default {
  name: 'IkonSpecializationDialog',
  components: {
    IkonAutocomplete: () => import('@/modules/app/components/IkonAutocomplete')
  },
  props: {
    item: {
      required: true
    },
    crudMode: {
      type: String,
      validator (value) {
        return Object.values(CRUD_MODE).includes(value)
      }
    }
  },
  data () {
    return {
      textAreaRows: 2,
      categories: [],
      fetchingCategories: false,
      CRUD_MODE
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
    categoryDisplayMethod (data) {
      return data.item.label_en
    },
    categoryFilterByLabelEnMethod (item, queryText) {
      console.log(item, queryText)
      const labelEn = item.label_en.toLowerCase()
      const searchText = queryText.toLowerCase()

      // return this.$lodash.filter(item, (item) => {
      //   return item.label_en && item.label_en.toLowerCase().includes(searchText)
      // })
      return labelEn.indexOf(searchText) > -1
    },
    getAllCategories () {
      this.fetchingCategories = true
      this.$store.dispatch('getAllCategories', { withIncludes: false }).then(res => {
        this.categories = res.items
      }).finally(() => {
        this.fetchingCategories = false
      })
    }
  },
  created () {
    this.getAllCategories()
  }
}
</script>
