<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn small v-bind="attrs" v-on="on" class="mx-sm-2 mx-1" dark icon>
        <v-icon small color="grey darken-3">mdi-translate</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item-group v-model="currentLocale">
        <v-list-item value="en" @click="changeLocale('en')">
          {{ $vuetify.lang.t('$vuetify.languageSelectorOptions.english') }}
        </v-list-item>
        <v-list-item value="de" @click="changeLocale('de')">
          {{ $vuetify.lang.t('$vuetify.languageSelectorOptions.german') }}
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'IkonLocaleSelector',
  data () {
    return {
      currentLocale: 'en'
    }
  },
  computed: {
    savedLocale () {
      return localStorage.getItem('locale')
    }
  },
  methods: {
    changeLocale (locale) {
      this.setLocale(locale)
      this.setRTL(locale)
    },
    setLocale (locale) {
      localStorage.setItem('locale', locale)
      this.$vuetify.lang.current = locale
    },
    getLocale () {
      if (this.savedLocale) {
        return this.savedLocale
      } else {
        return this.$vuetify.lang.current
      }
    },
    setRTL (locale) {
      switch (locale) {
        case 'ar':
          this.$vuetify.rtl = true
          break
        case 'en':
          this.$vuetify.rtl = false
          break
        case 'de':
          this.$vuetify.rtl = false
          break
      }
    }
  },
  created () {
    this.currentLocale = this.getLocale()
    this.changeLocale(this.currentLocale)
  }
}
</script>
