<template>
  <v-row justify="center" no-gutters>
    <v-expansion-panels accordion multiple tile :value="[0,1]">
      <v-expansion-panel>
        <v-expansion-panel-header>{{
            $vuetify.lang.t('$vuetify.general.components.filter.byRole')
          }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group v-model="localItem.isAdmin" row>
            <span class="my-auto role-label">{{
                $vuetify.lang.t('$vuetify.general.components.filter.adminRole')
              }}</span>
            <v-radio :label="$vuetify.lang.t('$vuetify.general.components.filter.include')" :value="true"/>
            <v-radio :label="$vuetify.lang.t('$vuetify.general.components.filter.exclude')" :value="false"/>
            <v-tooltip top>
              <template v-slot:activator="{on, attrs}">
                <v-btn icon v-bind="attrs" @click="localItem.isAdmin = null" v-on="on">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </template>
              <span>
                    {{ $vuetify.lang.t('$vuetify.general.components.filter.clearFilter') }}
              </span>
            </v-tooltip>
          </v-radio-group>

          <v-radio-group v-model="localItem.isProvider" row>
            <span class="my-auto role-label">{{
                $vuetify.lang.t('$vuetify.general.components.filter.providerRole')
              }}</span>
            <v-radio :label="$vuetify.lang.t('$vuetify.general.components.filter.include')" :value="true"/>
            <v-radio :label="$vuetify.lang.t('$vuetify.general.components.filter.exclude')" :value="false"/>
            <v-tooltip top>
              <template v-slot:activator="{on, attrs}">
                <v-btn icon v-bind="attrs" @click="localItem.isProvider = null" v-on="on">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </template>
              <span>
                    {{ $vuetify.lang.t('$vuetify.general.components.filter.clearFilter') }}
              </span>
            </v-tooltip>
          </v-radio-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>{{
            $vuetify.lang.t('$vuetify.general.components.filter.misc')
          }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group v-model="localItem.isEmailVerified" row>
            <span class="my-auto role-label">{{
                $vuetify.lang.t('$vuetify.general.components.filter.emailVerified')
              }}</span>
            <v-radio :label="$vuetify.lang.t('$vuetify.general.components.filter.include')" :value="true"/>
            <v-radio :label="$vuetify.lang.t('$vuetify.general.components.filter.exclude')" :value="false"/>
            <v-tooltip top>
              <template v-slot:activator="{on, attrs}">
                <v-btn icon v-bind="attrs" @click="localItem.isEmailVerified = null" v-on="on">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </template>
              <span>
                    {{ $vuetify.lang.t('$vuetify.general.components.filter.clearFilter') }}
              </span>
            </v-tooltip>
          </v-radio-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
  name: 'IkonFilterFilters',
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
