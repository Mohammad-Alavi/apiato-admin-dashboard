<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Name" rules="required|min:2|max:100" vid="name">
          <v-text-field v-model="localItem.name" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.applications.name')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Email" rules="required|email|min:2|max:700" vid="email">
          <v-text-field v-model="localItem.email" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.applications.email')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Phone" rules="required|min:5|max:30" vid="phone">
          <v-text-field v-model="localItem.phone" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.applications.phone')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="12">
        <validation-provider v-slot="{ errors }" name="Description" rules="required|min:3|max:2000" vid="description">
          <v-textarea v-model="localItem.description" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.applications.description')" :rows="2"
                      counter="2000"/>
        </validation-provider>
      </v-col>
      <v-col cols="6">
        <ikon-autocomplete
          :display-function="applicationStatusDisplayMethod"
          :items="ApplicationStatuses"
          :loading="fetchingFaqGroups"
          :multiple="false"
          rules="required"
          :name="$vuetify.lang.t('$vuetify.pages.applications.statuses')"
          :selected-items.sync="localItem.status"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ApplicationStatuses } from '@/modules/application/constants/application-statuses'

export default {
  name: 'IkonApplicationDialog',
  props: {
    item: {
      required: true
    }
  },
  components: {
    IkonAutocomplete: () => import('@/modules/app/components/IkonAutocomplete')
  },
  data () {
    return {
      ApplicationStatuses: Object.keys(ApplicationStatuses).map(function (key) {
        return ApplicationStatuses[key]
      }),
      fetchingFaqGroups: false
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
    applicationStatusDisplayMethod (data) {
      return data.item
    }
  }
}
</script>
