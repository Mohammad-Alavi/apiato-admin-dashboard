<template>
    <v-layout wrap>
        <v-menu v-model="isOpen" :close-on-content-click="false" :nudge-bottom="-30" max-width="290px"
                min-width="290px" offset-y transition="scale-transition">
            <template v-slot:activator="{ on }">
                <validation-provider v-slot="{ errors }" :class="{'grow': grow}" :name="name" :rules="rules">
                    <v-text-field
                        v-model="localItem" v-on="on" :error-messages="errors"
                        :label="label ? label : name" :outlined="outlined" clearable readonly required/>
                </validation-provider>
            </template>
            <v-date-picker
                v-model="localItem" :first-day-of-week="$vuetify.lang.current === 'ar' ? 6 : 0"
                :locale="$vuetify.lang.current === 'ar' ? 'ar-SA' : 'en-GB'" color="primary"
                @input="isOpen = false"/>
        </v-menu>
    </v-layout>
</template>

<script>
export default {
  name: 'IkonDatePicker',
  props: {
    date: {
      required: true
    },
    name: {
      type: String,
      required: true
    },
    rules: {
      type: String,
      required: false,
      default: 'required'
    },
    label: {
      type: String,
      required: false
    },
    outlined: {
      type: Boolean,
      required: false,
      default: true
    },
    grow: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    localItem: {
      get () {
        return this.date
      },
      set (v) {
        this.$emit('update:date', v)
      }
    }
  }
}
</script>
