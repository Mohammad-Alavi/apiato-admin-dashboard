<template>
  <validation-provider v-slot="{ errors }" :vid="vid" :name="name" :rules="rules">
    <v-autocomplete v-model="localSelectedItems" :deletable-chips="deletableChips" :dense="dense" :disabled="disabled"
                    :error-messages="errors"
                    :filter="filterMethod" :items="items" :label="label ? label : name" :loading="loading"
                    :multiple="multiple"
                    :outlined="outlined" chips hide-selected item-value="id" persistent-hint return-object small-chips>
      <template v-slot:selection="data">
        <v-chip :close="deletableChips" :input-value="data.selected" label small v-bind="data.attrs"
                @click="data.select"
                @click:close="removeItemFromArray(data.item, selectedItems)">
          {{ displayMethod(data) }}
        </v-chip>
      </template>
      <template v-slot:item="data">
        <template v-if="typeof data.item !== 'object'">
          <v-list-item-content v-text="data.item"/>
        </template>
        <template v-else>
          <v-list-item-content>
            <v-list-item-title v-html="displayMethod(data)"/>
          </v-list-item-content>
        </template>
      </template>
    </v-autocomplete>
  </validation-provider>
</template>

<script>
import { removeItemFromArray } from '@/modules/app/helpers/utils'

export default {
  name: 'IkonAutocomplete',
  props: {
    items: {
      type: Array,
      required: true
    },
    selectedItems: {
      required: true
    },
    filter: {
      type: Function,
      required: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    displayFunction: {
      type: Function,
      required: false
    },
    multiple: {
      type: Boolean,
      required: false,
      default: true
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    dense: {
      type: Boolean,
      required: false,
      default: false
    },
    rules: {
      type: String,
      required: false,
      default: 'required'
    },
    deletableChips: {
      type: Boolean,
      required: false,
      default: false
    },
    vid: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      removeItemFromArray
    }
  },
  computed: {
    localSelectedItems: {
      get () {
        return this.selectedItems
      },
      set (v) {
        this.$emit('update:selected-items', v)
      }
    },
    displayMethod () {
      return this.displayFunction ?? this.defaultDisplayByName
    },
    filterMethod () {
      return this.filter ?? this.defaultFilterByName
    }
  },
  methods: {
    defaultFilterByName (item, queryText) {
      const name = item.name.toLowerCase()
      const searchText = queryText.toLowerCase()

      return name.indexOf(searchText) > -1
    },
    defaultDisplayByName (data) {
      return data.item.name
    }
  }
}
</script>
