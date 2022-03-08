<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn :loading="loading" icon v-bind="attrs" @click="rejectRating" v-on="on">
        <v-icon small color="red">mdi-minus-circle-outline</v-icon>
      </v-btn>
    </template>
    <span>{{ $vuetify.lang.t('$vuetify.pages.ratings.rejectRating') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'IkonDataTableRatingRejectActionButton',
  props: {
    rating: {
      required: true
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    rejectRating () {
      this.loading = true
      this.$store.dispatch('rejectRating', {
        rating_id: this.rating.id
      }).finally(() => {
        this.loading = false
        this.$parent.$emit('data-changed')
      })
    }
  }
}
</script>
