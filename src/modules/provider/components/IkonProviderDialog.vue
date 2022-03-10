<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Hourly Rate" rules="numeric" vid="hourly_rate">
          <v-text-field type="number" v-model="localItem.hourly_rate" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.providers.hourlyRate')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="12">
        <validation-provider v-slot="{ errors }" name="Description" rules="min:50|max:500" vid="description">
          <v-textarea rows="3" v-model="localItem.description" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.providers.description')"/>
        </validation-provider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IkonProviderDialog',
  props: {
    item: {
      required: true
    }
  },
  computed: {
    localItem: {
      get () {
        return this.item
      },
      set (v) {
        console.log('local', v)
        this.$emit('input', v)
      }
    }
  }
}
</script>
