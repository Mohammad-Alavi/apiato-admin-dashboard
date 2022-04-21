<template>
  <v-container>
    <div class="text-left" v-html="subtitle1"/>
  <br>
    <div class="text-left" v-html="subtitle2"/>
    <validation-provider v-slot="{ errors }" name="Email" :rules="{required: true, email: true, is: item.email }" vid="user">
      <v-text-field v-model="email" :error-messages="errors" :label="$vuetify.lang.t('$vuetify.pages.users.email')"/>
    </validation-provider>
  </v-container>
</template>

<script>
export default {
  name: 'IkonDeleteAccountDialogBody',
  data () {
    return {
      email: null
    }
  },
  props: {
    item: {
      required: true
    }
  },
  computed: {
    styledEmail () {
      return `<b> ${this.item.email} </b>`
    },
    subtitle1 () {
      return this.$vuetify.lang.t('$vuetify.pages.users.deleteAccountSubtitle1').replace('{_email_}', this.styledEmail)
    },
    subtitle2 () {
      return this.$vuetify.lang.t('$vuetify.pages.users.deleteAccountSubtitle2').replace('{_email_}', this.styledEmail)
    }
  }
}
</script>
