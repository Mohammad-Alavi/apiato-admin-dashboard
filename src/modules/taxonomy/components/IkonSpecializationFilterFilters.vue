<template>
  <v-row justify="center" no-gutters>
    <v-col class="text-start ps-5 pa-3" cols="12">
      <p class="my-auto text-left text-subtitle-1">
        {{
          $vuetify.lang.t('$vuetify.pages.taxonomies.pages.specializations.filter.filterSpecializationsTitle')
        }}
      </p>
    </v-col>
    <v-col cols="10">
      <ikon-autocomplete
        :items="categories"
        rules=""
        :display-function="categoryDisplayMethod"
        :name="$vuetify.lang.t('$vuetify.pages.taxonomies.pages.specializations.categories')"
        :selected-items.sync="localItem.categories"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IkonSpecializationFilterFilters',
  components: {
    IkonAutocomplete: () => import('@/modules/app/components/IkonAutocomplete')
  },
  data () {
    return {
      categories: [],
      fetchingCategories: false
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
    categoryDisplayMethod (data) {
      return data.item.label_en
    },
    getAllSport () {
      this.fetchingCategories = true
      this.$store.dispatch('getAllCategories', { withIncludes: false }).then(res => {
        this.categories = res.items
      }).finally(() => {
        this.fetchingCategories = false
      })
    }
  },
  created () {
    this.getAllSport()
  }
}
</script>

<style lang="scss">
.role-label {
  min-width: 100px;
}
</style>
