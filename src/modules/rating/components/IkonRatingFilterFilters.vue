<template>
  <v-row justify="left" no-gutters>
    <v-col cols="12">
      <v-radio-group class="pl-5" v-model="localItem.isRatingReviewed" row>
            <span class="my-auto role-label">{{
                $vuetify.lang.t('$vuetify.pages.ratings.filter.isReviewed')
              }}</span>
        <v-radio :label="$vuetify.lang.t('$vuetify.pages.ratings.filter.include')" :value="1"/>
        <v-radio :label="$vuetify.lang.t('$vuetify.pages.ratings.filter.exclude')" :value="0"/>
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <v-btn icon v-bind="attrs" @click="localItem.isRatingReviewed = null" v-on="on">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
          <span>
                    {{ $vuetify.lang.t('$vuetify.pages.ratings.filter.clearFilter') }}
              </span>
        </v-tooltip>
      </v-radio-group>

      <v-radio-group class="pl-5" v-model="localItem.isRatingAccepted" row>
            <span class="my-auto role-label">{{
                $vuetify.lang.t('$vuetify.pages.ratings.filter.isAccepted')
              }}</span>
        <v-radio :label="$vuetify.lang.t('$vuetify.pages.ratings.filter.include')" :value="1"/>
        <v-radio :label="$vuetify.lang.t('$vuetify.pages.ratings.filter.exclude')" :value="0"/>
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <v-btn icon v-bind="attrs" @click="localItem.isRatingAccepted = null" v-on="on">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
          <span>
                    {{ $vuetify.lang.t('$vuetify.pages.ratings.filter.clearFilter') }}
              </span>
        </v-tooltip>
      </v-radio-group>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IkonRatingFilterFilters',
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  computed: {
    localItem: {
      get () {
        return this.filter
      },
      set (v) {
        this.$emit('update:filter', v)
      }
    }
  }
}
</script>

<style lang="scss">
.role-label {
  min-width: 100px;
}
</style>
