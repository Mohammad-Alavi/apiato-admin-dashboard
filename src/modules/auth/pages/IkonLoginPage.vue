<template>
    <v-layout>
        <v-row align-content="center" dense justify="center">
            <v-col class="col-auto">
                <validation-observer ref="observer" v-slot="{ invalid }">
                    <form @submit.prevent="submit">
                        <h1 class="text-h5 mb-5 mx-auto light-green--text">Welcome to IKON</h1>
                        <v-card class="px-10 py-5 ma-auto" min-width="400">
                            <validation-provider v-slot="{ errors }" name="Email" rules="required|email">
                                <v-text-field v-model="username" :error-messages="errors"
                                              :label="$vuetify.lang.t('$vuetify.pages.auth.email')"/>
                            </validation-provider>
                            <validation-provider v-slot="{ errors }" name="Password" rules="required">
                                <v-text-field
                                    v-model="password"
                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :error-messages="errors"
                                    :type="showPassword ? 'text' : 'password'"
                                    :label="$vuetify.lang.t('$vuetify.pages.auth.password')"
                                    @click:append="showPassword = !showPassword"
                                />
                            </validation-provider>
                            <v-checkbox v-model="staySignedIn">
                                <template v-slot:label>
                                    <div>
                                        {{ $vuetify.lang.t('$vuetify.pages.auth.staySignedIn') }}
                                    </div>
                                </template>
                            </v-checkbox>
                            <v-btn :disabled="invalid" :loading="loggingIn" class="mt-5" color="primary" tile
                                   to="/dashboard" type="submit"
                                   width="100%"
                                   @click="login">
                                {{ $vuetify.lang.t('$vuetify.pages.auth.login') }}
                            </v-btn>
                            <div class="mt-5 text-center">
                                <a class="text-body-2" @click="forgotPassword">
                                    {{ $vuetify.lang.t('$vuetify.pages.auth.forgotPassword') }}
                                </a>
                            </div>
                        </v-card>
                    </form>
                </validation-observer>
            </v-col>
        </v-row>
    </v-layout>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'IkonLoginPage',
  components: {
    ValidationObserver
  },
  data () {
    return {
      showPassword: false,
      username: null,
      password: null,
      staySignedIn: false,
      loggingIn: false
    }
  },
  methods: {
    login () {
      this.loggingIn = true
      this.$store.dispatch('login', {
        email: this.username,
        password: this.password,
        staySignedIn: this.staySignedIn
      }).finally(() => {
        this.loggingIn = false
      }
      )
    },
    forgotPassword () {
      this.$store.dispatch('forgotPassword', { email: this.username })
    },
    submit () {
      this.$refs.observer.validate()
    }
  }
}
</script>