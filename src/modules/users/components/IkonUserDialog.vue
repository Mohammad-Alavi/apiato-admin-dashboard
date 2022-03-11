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
        <v-row justify="end">
          <v-switch
            v-model="localItem.suspended_at"
            :label="localItem.suspended_at ? $vuetify.lang.t('$vuetify.pages.users.suspended'): $vuetify.lang.t('$vuetify.pages.users.unsuspended')"
          ></v-switch>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6">
        <validation-provider v-slot="{ errors }" name="Email" rules="required|email" vid="email">
          <v-text-field v-model="localItem.email" :error-messages="errors"
                        :label="$vuetify.lang.t('$vuetify.pages.users.email')"
                        disabled></v-text-field>
        </validation-provider>
      </v-col>
      <v-col cols="6">
        <ikon-autocomplete
          :display-function="genderDisplayMethod"
          :items="genders"
          :loading="fetchingRoles"
          :multiple="false"
          :name="$vuetify.lang.t('$vuetify.pages.users.gender')"
          :selected-items.sync="localItem.gender"
        ></ikon-autocomplete>
      </v-col>
      <v-col cols="12" md="4" sm="6">
        <ikon-date-picker :date.sync="localItem.birth" :grow="$vuetify.breakpoint.lgAndUp"
                          :label="$vuetify.lang.t('$vuetify.pages.users.birth')"
                          :outlined="false"
                          dense name="Birthday"/>
      </v-col>
      <v-col cols="12">
        <ikon-autocomplete
          :deletable-chips="true"
          :display-function="roleDisplayMethod"
          :items="roles"
          :loading="fetchingRoles"
          :multiple="true"
          :name="$vuetify.lang.t('$vuetify.pages.users.role')"
          :selected-items.sync="localItem.roles"
        ></ikon-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IkonUserDialog',
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
      fetchingRoles: false
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
    }
  },
  created () {
    this.fetchingRoles = true
    this.$store.dispatch('getAllRoles', { withIncludes: false }).then(res => {
      this.roles = res.items
    }).finally(() => {
      this.fetchingRoles = false
    })
  }
}
</script>
