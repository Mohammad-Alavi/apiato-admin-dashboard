<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6">
                <validation-provider v-slot="{ errors }" name="Question (EN)" rules="required|min:2|max:700">
                    <v-text-field v-model="localItem.question_en" :error-messages="errors"
                                  :label="$vuetify.lang.t('$vuetify.pages.faqs.questionEn')">
                    </v-text-field>
                </validation-provider>
            </v-col>
            <v-col cols="12" sm="6">
                <validation-provider v-slot="{ errors }" name="Answer (EN)" rules="required|min:2|max:700">
                    <v-text-field v-model="localItem.answer_en" :error-messages="errors"
                                  :label="$vuetify.lang.t('$vuetify.pages.faqs.answerEn')"></v-text-field>
                </validation-provider>
            </v-col>
          <v-col cols="12" sm="6">
                <validation-provider v-slot="{ errors }" name="Question (DE)" rules="required|min:2|max:700">
                    <v-text-field v-model="localItem.question_de" :error-messages="errors"
                                  :label="$vuetify.lang.t('$vuetify.pages.faqs.questionDe')">
                    </v-text-field>
                </validation-provider>
            </v-col>
          <v-col cols="12" sm="6">
                <validation-provider v-slot="{ errors }" name="Answer (DE)" rules="required|min:2|max:700">
                    <v-text-field v-model="localItem.answer_de" :error-messages="errors"
                                  :label="$vuetify.lang.t('$vuetify.pages.faqs.answerDe')"></v-text-field>
                </validation-provider>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'IkonFaqDialog',
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
