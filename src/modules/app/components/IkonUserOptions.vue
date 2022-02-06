<template>
    <div>
        <ikon-locale-selector/>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" min-width="160" text tile>
                    <v-icon left>{{ 'mdi-account' }}</v-icon>
                    {{ $auth.user().name }}
                    <v-icon right>{{ 'mdi-menu-down' }}</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item :to="{name: 'profile'}" class="text-start" link>
                    <v-list-item-title>
                        {{ $vuetify.lang.t('$vuetify.general.components.accountSetting') }}
                    </v-list-item-title>
                </v-list-item>
                <v-list-item class="text-start" link @click.native="logout">
                    <v-list-item-title>
                        {{ $vuetify.lang.t('$vuetify.general.components.signOut') }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-overlay v-if="loggingOut">
            <v-progress-circular indeterminate></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
export default {
  name: 'IkonUserOptions',
  components: {
    IkonLocaleSelector: () => import('@/modules/app/components/IkonLocaleSelector')
  },
  data () {
    return {
      loggingOut: false
    }
  },
  methods: {
    logout () {
      this.loggingOut = true
      this.$store.dispatch('logout').finally(() => {
        this.loggingOut = false
      })
    }
  }
}
</script>
