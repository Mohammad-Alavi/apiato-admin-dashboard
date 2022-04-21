<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs"
             @click="$router.push({name: 'faq-group-faqs', params: {faq_group_id: item.id, faqGroup: item}})"
             v-on="on">
        <v-icon small>mdi-account-search</v-icon>
      </v-btn>
    </template>
    <span>{{ $vuetify.lang.t('$vuetify.pages.faqGroups.viewFaqs') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'IkonDataTableFaqGroupFaqsActionButton',
  props: {
    item: {
      required: true
    }
  }
}
</script>
