<template>
    <v-container fluid>
        <validation-observer ref="observer" v-slot="{ invalid, handleSubmit }">
            <form @submit.prevent="handleSubmit(updateUser())">
                <v-row>
                    <v-col class="text-start">
                        <v-tooltip right>
                            <template v-slot:activator="{on, attrs}">
                                <v-btn v-bind="attrs" v-on="on" icon @click="$router.back()">
                                    <v-icon>mdi-arrow-left</v-icon>
                                </v-btn>
                            </template>
                            <span>
                                {{ $vuetify.lang.t('$vuetify.pages.profile.back') }}
                            </span>
                        </v-tooltip>
                    </v-col>
                    <v-col class="text-end" cols="auto">
                        <ikon-user-options/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" lg="6" md="12">
                        <v-card>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12">
                                        <v-card-title>
                                            {{ $vuetify.lang.t('$vuetify.pages.profile.editProfile') }}
                                        </v-card-title>
                                    </v-col>
                                    <v-col cols="6">
                                        <validation-provider v-slot="{ errors }" name="First Name" rules="min:2|max:50">
                                            <v-text-field v-model="user.name" :error-messages="errors"
                                                          :label="$vuetify.lang.t('$vuetify.pages.profile.name')"/>
                                        </validation-provider>
                                    </v-col>
                                    <v-col cols="6">
                                        <validation-provider v-slot="{ errors }" name="Email" rules="email" vid="email">
                                            <v-text-field v-model="user.email" :error-messages="errors"
                                                          :label="$vuetify.lang.t('$vuetify.pages.profile.email')"/>
                                        </validation-provider>
                                    </v-col>
                                    <v-col cols="6">
                                        <validation-provider v-slot="{ errors }" name="Email (Retype)"
                                                             rules="required_if:email|confirmed:email">
                                            <v-text-field v-model="user.confirm_email" :error-messages="errors"
                                                          :label="$vuetify.lang.t('$vuetify.pages.profile.emailRetype')"/>
                                        </validation-provider>
                                    </v-col>
                                    <v-col cols="6">
                                        <validation-provider v-slot="{ errors }" name="New Password"
                                                             rules="min:6|max:40" vid="password">
                                            <v-text-field v-model="user.password" :error-messages="errors"
                                                          :label="$vuetify.lang.t('$vuetify.pages.profile.newPassword')"
                                                          type="password"/>
                                        </validation-provider>
                                    </v-col>
                                    <v-col cols="6">
                                        <validation-provider v-slot="{ errors }" name="New Password (Retype)"
                                                             rules="required_if:password|confirmed:password">
                                            <v-text-field v-model="user.confirm_password" :error-messages="errors"
                                                          :label="$vuetify.lang.t('$vuetify.pages.profile.newPasswordRetype')"
                                                          type="password"/>
                                        </validation-provider>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn text @click="reset()">
                                    {{ $vuetify.lang.t('$vuetify.general.reset') }}
                                </v-btn>
                                <v-btn :disabled="invalid" :loading="submittingData" text type="submit">
                                    {{ $vuetify.lang.t('$vuetify.general.update') }}
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </form>
        </validation-observer>
    </v-container>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'IkonUserPage',
  components: {
    IkonUserOptions: () => import('@/modules/app/components/IkonUserOptions'),
    ValidationObserver
  },
  data () {
    return {
      user: undefined,
      submittingData: false
    }
  },
  methods: {
    reset () {
      this.validateForm()
      this.user = this.$lodash.cloneDeep(this.$auth.user())
    },
    updateUser () {
      this.submittingData = true

      this.$store.dispatch('updateProfile', { ...this.user })
        .then((res) => {
          this.$auth.user(res.data.data)
          this.reset()
        })
        .finally(() => {
          this.submittingData = false
        })
    },
    validateForm () {
      if (this.$refs.observer) {
        this.$refs.observer.validate()
      }
    }
  },
  watch: {
    'user.email': {
      handler: function () {
        this.validateForm()
      },
      immediate: true
    }
  },
  created () {
    this.reset()
  }
}
</script>
