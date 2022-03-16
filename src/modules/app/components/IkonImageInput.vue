<template>
  <validation-provider v-slot="{ errors }" :name="name" :rules="rules">
    <v-file-input
      v-model="localImage"
      :error-messages="errors"
      :hide-details="hideDetails"
      :hide-input="onlyIcon"
      :label="label ? label : name"
      :loading="loading"
      :outlined="outlined"
      :prepend-icon="onlyIcon ? 'mdi-paperclip' : ''"
      accept="imagePreview/png, imagePreview/jpeg, imagePreview/jpg"
      prepend-inner-icon="mdi-paperclip"
      truncate-length="14"
      @change="$emit('change', $event)"/>
  </validation-provider>
</template>

<script>
export default {
  name: 'IkonImageInput',
  props: {
    image: {
      required: true
    },
    loading: {
      type: Boolean,
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
    onlyIcon: {
      type: Boolean,
      required: false,
      default: false
    },
    hideDetails: {
      type: Boolean,
      required: false,
      default: false
    },
    outlined: {
      type: Boolean,
      required: false,
      default: true
    },
    rules: {
      type: String,
      required: false,
      default: 'required'
    }
  },
  computed: {
    localImage: {
      get () {
        return this.image ?? []
      },
      set (v) {
        this.$emit('update:image', v)
      }
    }
  }
}
</script>
