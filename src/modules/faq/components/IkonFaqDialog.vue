<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Question (EN)" rules="required|min:2|max:700" vid="question_en">
          <v-textarea v-model="localItem.question_en" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.faqs.questionEn')" :rows="textAreaRows"
                      counter/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Answer (EN)" rules="required|min:2|max:700" vid="answer_en">
          <v-textarea v-model="localItem.answer_en" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.faqs.answerEn')" :rows="textAreaRows"
                      counter/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Question (DE)" rules="required|min:2|max:700" vid="question_de">
          <v-textarea v-model="localItem.question_de" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.faqs.questionDe')" :rows="textAreaRows"
                      counter/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Answer (DE)" rules="required|min:2|max:700" vid="answer_de">
          <v-textarea v-model="localItem.answer_de" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.faqs.answerDe')" :rows="textAreaRows"
                      counter/>
        </validation-provider>
      </v-col>
      <v-col cols="6">
        <ikon-autocomplete
          :display-function="faqGroupDisplayMethod"
          :items="faqGroups"
          :loading="fetchingFaqGroups"
          :multiple="false"
          rules="required"
          :name="$vuetify.lang.t('$vuetify.pages.faqs.faqGroup')"
          :selected-items.sync="localItem.faq_group"
        />
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
  components: {
    IkonAutocomplete: () => import('@/modules/app/components/IkonAutocomplete')
  },
  data () {
    return {
      textAreaRows: 2,
      faqGroups: [],
      fetchingFaqGroups: false
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
  },
  methods: {
    getAllFaqGroups () {
      this.fetchingFaqGroups = true
      this.$store.dispatch('getAllFaqGroups', { withIncludes: false }).then(res => {
        this.faqGroups = res.items
      }).finally(() => {
        this.fetchingFaqGroups = false
      })
    },
    faqGroupDisplayMethod (data) {
      return data.item.name
    }
  },
  created () {
    this.getAllFaqGroups()
  }
}
</script>
