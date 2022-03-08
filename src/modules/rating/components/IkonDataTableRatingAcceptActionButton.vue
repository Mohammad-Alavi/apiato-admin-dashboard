<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn :loading="loading" icon v-bind="attrs" @click="acceptRating" v-on="on">
        <v-icon small color="green">mdi-plus-circle-outline</v-icon>
      </v-btn>
    </template>
    <span>{{ $vuetify.lang.t('$vuetify.pages.ratings.acceptRating') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'IkonDataTableRatingAcceptActionButton',
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
    acceptRating () {
      this.loading = true
      this.$store.dispatch('acceptRating', {
        rating_id: this.rating.id
      }).finally(() => {
        this.loading = false
        this.$parent.$emit('data-changed')
      })
    }
  }
}
</script>
