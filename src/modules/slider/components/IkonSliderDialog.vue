<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6">
                <validation-provider v-slot="{ errors }" vid="name" :name="$vuetify.lang.t('$vuetify.pages.sliders.name')" rules="required|min:3">
                    <v-text-field v-model="localItem.name" :error-messages="errors"
                                  :label="$vuetify.lang.t('$vuetify.pages.sliders.name')"/>
                </validation-provider>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'IkonSliderDialog',
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
