<template>
  <v-dialog v-model="showDialog" max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon small>mdi-account-eye</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-start text-wrap">
        {{ $vuetify.lang.t('$vuetify.pages.requests.userDetail') }}
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field v-model="request.user.name" :label="$vuetify.lang.t('$vuetify.pages.users.name')" readonly/>
            </v-col>
            <v-col cols="12" sm="6">
              <v-row justify="end">
                <v-switch v-model="request.user.suspended_at"
                          :label="request.user.suspended_at ? 'Suspended': 'Unsuspended'"
                          readonly
                ></v-switch>
              </v-row>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="request.user.email" :label="$vuetify.lang.t('$vuetify.pages.users.email')"
                            readonly/>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="request.user.gender" :label="$vuetify.lang.t('$vuetify.pages.users.gender')"
                            readonly/>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="request.user.birth" :label="$vuetify.lang.t('$vuetify.pages.users.birth')"
                            readonly/>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="request.user.roles_names" :label="$vuetify.lang.t('$vuetify.pages.users.role')"
                            readonly/>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'IkonDataTableRequestDisplayUserActionButton',
  props: {
    request: {
      required: true
    }
  },
  data () {
    return {
      showDialog: false
    }
  }
}
</script>
