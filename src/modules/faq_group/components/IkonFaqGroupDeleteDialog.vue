<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <validation-provider v-slot="{ errors }" name="Question (EN)" rules="required|min:2|max:700" vid="faq_group">
          <div class="text-left error--text" v-for="(error, index) in errors" :key="index">{{ error }}</div>
        </validation-provider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IkonFaqGroupDeleteDialog',
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
        this.$emit('input', v)
      }
    }
  }
}
</script>
