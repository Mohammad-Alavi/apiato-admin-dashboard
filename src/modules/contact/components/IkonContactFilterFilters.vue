<template>
  <v-row justify="center" no-gutters>
    <v-col class="text-start ps-5 pa-3" cols="12">
      <p class="my-auto text-left text-subtitle-1">
        {{
          $vuetify.lang.t('$vuetify.pages.contacts.filter.filterContactsTitle')
        }}
      </p>
    </v-col>
    <v-col cols="10">
      <ikon-autocomplete
        :items="topics"
        rules=""
        :multiple="false"
        :display-function="topicDisplayMethod"
        :name="$vuetify.lang.t('$vuetify.pages.contacts.filter.topic')"
        :selected-items.sync="localItem.contactTopic"
      />
    </v-col>
    <v-col cols="10">
      <v-radio-group v-model="localItem.isResolved" row>
              <span class="my-auto role-label">{{
                  $vuetify.lang.t('$vuetify.pages.contacts.filter.show')
                }}</span>
        <v-radio :label="$vuetify.lang.t('$vuetify.pages.contacts.filter.all')" :value="null"/>
        <v-radio :label="$vuetify.lang.t('$vuetify.pages.contacts.filter.onlyResolved')" :value="1"/>
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <v-btn icon v-bind="attrs" @click="localItem.isResolved = 0" v-on="on">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
          <span>
              {{ $vuetify.lang.t('$vuetify.pages.contacts.filter.clearFilter') }}
          </span>
        </v-tooltip>
      </v-radio-group>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IkonContactFilterFilters',
  components: {
    IkonAutocomplete: () => import('@/modules/app/components/IkonAutocomplete')
  },
  data () {
    return {
      topics: ['contact', 'suggest'],
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
    topicDisplayMethod (data) {
      return data.item
    }
  }
}
</script>

<style lang="scss">
.role-label {
  min-width: 100px;
}
</style>
