<template>
    <v-layout wrap>
        <v-menu v-model="isOpen" :close-on-content-click="false" :nudge-bottom="-30"
                max-width="290px"
                min-width="290px" offset-y transition="scale-transition">
            <template v-slot:activator="{ attrs, on }">
                <validation-provider v-slot="{ errors }" :class="{'grow': grow}" :name="name" :rules="rules">
                    <v-text-field v-model="localItem" v-bind="attrs" v-on="on" :error-messages="errors"
                                  :label="label ? label : name" :outlined="outlined" clearable readonly required/>
                </validation-provider>
            </template>

            <v-card>
                <v-time-picker v-model="localItem" color="primary" @click:minute="isOpen = false"/>
            </v-card>
        </v-menu>
    </v-layout>
</template>

<script>
export default {
  name: 'IkonTimePicker',
  props: {
    time: {
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
        return this.time
      },
      set (v) {
        this.$emit('update:time', v)
      }
    }
  }
}
</script>
