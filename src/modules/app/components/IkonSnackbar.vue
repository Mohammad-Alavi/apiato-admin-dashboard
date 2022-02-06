<template>
  <v-snackbar v-model="showSnackbar" :color="snackbarColor" app tile>
    {{ snackbarMessage }}
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="showSnackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { SET_SNACKBAR_DISPLAY_STATE } from '@/modules/app/store/mutation-types'

export default {
  name: 'IkonSnackbar',
  computed: {
    snackbarMessage () {
      return this.$store.state.snackbar.message
    },
    snackbarColor () {
      return this.$store.state.snackbar.color
    },
    showSnackbar: {
      get () {
        return this.$store.state.snackbar.show
      },
      set (v) {
        this.$store.commit(SET_SNACKBAR_DISPLAY_STATE, v)
      }
    }
  }
}
</script>
