<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Name" rules="required" vid="name">
          <v-text-field v-model="localItem.name" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.faqGroups.name')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Label (EN)" rules="required" vid="label_en">
          <v-text-field v-model="localItem.label_en" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.faqGroups.labelEn')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Label (DE)" rules="required" vid="label_de">
          <v-text-field v-model="localItem.label_de" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.faqGroups.labelDe')"/>
        </validation-provider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IkonFaqGroupDialog',
  props: {
    item: {
      required: true
    }
  },
  data () {
    return {
      textAreaRows: 2
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
  }
}
</script>
