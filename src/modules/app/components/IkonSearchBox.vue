<template>
    <v-row align="end">
        <v-btn icon @click="showSearchBox = !showSearchBox">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-expand-x-transition mode="in-out">
            <v-text-field v-if="showSearchBox"
                          v-click-outside="searchBoxUnfocused"
                          :loading="loading"
                          :value="searchQuery"
                          autofocus
                          clearable
                          dense
                          hide-details
                          @input="$emit('update:searchQuery', $event != null ? $event : '')">
            </v-text-field>
        </v-expand-x-transition>
    </v-row>
</template>

<script>
export default {
  name: 'IkonSearchBox',
  props: {
    searchQuery: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      showSearchBox: false
    }
  },
  methods: {
    searchBoxUnfocused () {
      if (this.showSearchBox && !this.searchQuery) { this.showSearchBox = false }
    }
  }
}
</script>
