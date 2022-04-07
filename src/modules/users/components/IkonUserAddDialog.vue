<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Name" rules="required|min:2|max:50" vid="name">
          <v-text-field v-model="localItem.name" :error-messages="errors"
                        :label="$vuetify.lang.t('$vuetify.pages.users.name')">
          </v-text-field>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Email" rules="required|email" vid="email">
          <v-text-field v-model="localItem.email" :error-messages="errors"
                        :label="$vuetify.lang.t('$vuetify.pages.users.email')"/>
        </validation-provider>
      </v-col>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Password" rules="required" vid="password">
          <v-text-field
            v-model="localItem.password"
            :error-messages="errors"
            type="password"
            :label="$vuetify.lang.t('$vuetify.pages.auth.password')"
          />
        </validation-provider>
      </v-col>
      <v-col cols="6">
        <ikon-autocomplete
          :display-function="genderDisplayMethod"
          :items="genders"
          :loading="fetchingRoles"
          :multiple="false"
          rules=""
          :name="$vuetify.lang.t('$vuetify.pages.users.gender')"
          :selected-items.sync="localItem.gender"
        ></ikon-autocomplete>
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <ikon-date-picker :date.sync="localItem.birth" :grow="$vuetify.breakpoint.lgAndUp"
                          :label="$vuetify.lang.t('$vuetify.pages.users.birth')"
                          :outlined="false"
                          rules=""
                          dense name="Birthday"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IkonUserAddDialog',
  props: {
    item: {
      required: true
    }
  },
  components: {
    IkonAutocomplete: () => import('@/modules/app/components/IkonAutocomplete'),
    IkonDatePicker: () => import('@/modules/app/components/IkonDatePicker')
  },
  data () {
    return {
      genders: ['male', 'female', 'unspecified'],
      roles: [],
      verifyEmailUrls: [],
      fetchingRoles: false,
      fetchingVerifyEmailUrls: false
    }
  },
  computed: {
    localItem: {
      get () {
        return this.item
      },
      set (v) {
        this.$emit('input', v)
      }
    }
  },
  methods: {
    roleDisplayMethod (data) {
      return data.item.display_name
    },
    genderDisplayMethod (data) {
      return data.item
    },
    getAllRoles () {
      this.fetchingRoles = true
      this.$store.dispatch('getAllRoles', { withIncludes: false }).then(res => {
        this.roles = res.items
      }).finally(() => {
        this.fetchingRoles = false
      })
    },
    getAllVerifyEmailUrls () {
      this.fetchingVerifyEmailUrls = true
      this.$store.dispatch('getAllVerifyEmailUrls', { withIncludes: false }).then(res => {
        this.verifyEmailUrls = res
        this.localItem.verification_url = this.verifyEmailUrls[0]
      }).finally(() => {
        this.fetchingVerifyEmailUrls = false
      })
    }
  },
  created () {
    this.getAllRoles()
    this.getAllVerifyEmailUrls()
  }
}
</script>
