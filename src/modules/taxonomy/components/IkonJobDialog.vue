<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Name" rules="required|min:2|max:700" vid="name">
          <v-text-field v-model="localItem.name" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.jobs.name')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Label (EN)" rules="required|min:2|max:700" vid="label_en">
          <v-text-field v-model="localItem.label_en" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.jobs.labelEn')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Label (DE)" rules="required|min:2|max:700" vid="label_de">
          <v-text-field v-model="localItem.label_de" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.jobs.labelDe')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12">
        <ikon-autocomplete
          :deletable-chips="true"
          :display-function="categoryDisplayMethod"
          :items="categories"
          :loading="fetchingCategories"
          :multiple="false"
          :name="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.jobs.category')"
          :selected-items.sync="localItem.category"
        ></ikon-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IkonJobDialog',
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
      categories: [],
      fetchingCategories: false
    }
  },
  computed: {
    localItem: {
      get () {
        console.log(this.item)
        return this.item
      },
      set (v) {
        this.$emit('input', v)
      }
    }
  },
  methods: {
    categoryDisplayMethod (data) {
      return data.item.name
    }
  },
  created () {
    this.fetchingCategories = true
    this.$store.dispatch('getAllCategories', { withIncludes: false }).then(res => {
      this.categories = res.items
    }).finally(() => {
      this.fetchingCategories = false
    })
  }
}
</script>
