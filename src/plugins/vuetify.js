import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import { VCheckbox, VCol, VExpansionPanels, VRow, VTextField, VTooltip } from 'vuetify/lib'
import { Intersect, Resize, Ripple, Touch } from 'vuetify/lib/directives'
import light from '@/modules/app/themes/ikon-light'
import { ar, en } from '@/assets/translations'

Vue.use(Vuetify, {
  components: { VCheckbox, VCol, VExpansionPanels, VRow, VTextField, VTooltip },
  directives: { Ripple, Intersect, Touch, Resize }
})

export default new Vuetify({
  theme: {
    dark: false,
    themes: { light }
  },
  lang: {
    locales: {
      ar,
      en
    },
    current: localStorage.getItem('locale') ?? 'en',
    rtl: localStorage.getItem('locale') === 'ar'
  }
})
