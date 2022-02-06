<template>
    <v-row justify="start">
        <div class="my-auto mx-3">
            {{ $vuetify.lang.t('$vuetify.general.components.exportTo') }}
        </div>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" outlined text tile>
                    {{ selectedOption.title }}
                    <v-icon right>{{ 'mdi-menu-down' }}</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(option, index) in options" :key="index" link @click="selectedOption = option">
                    <v-list-item-title>{{ option.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <export v-if="selectedOption.mime === 'csv'" :data="data" :escapeCsv="false"
                :name="$route.name + '.' + selectedOption.mime"
                :type="selectedOption.mime">
            <v-btn class="ms-5" outlined text tile>
                {{ $vuetify.lang.t('$vuetify.general.components.export') }}
            </v-btn>
        </export>
        <v-btn v-else class="ms-5" outlined text tile @click="exportExcel">
            {{ $vuetify.lang.t('$vuetify.general.components.export') }}
        </v-btn>
    </v-row>
</template>

<script>
export default {
  name: 'IkonDataExport',
  props: {
    data: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      options: [
        {
          title: 'EXCEL',
          mime: 'xlsx'
        },
        {
          title: 'CSV',
          mime: 'csv'
        }
      ],
      selectedOption: null
    }
  },
  methods: {
    exportExcel () {
      import(/* webpackChunkName: "js2excel" */ 'js2excel').then(({ json2excel }) => {
        json2excel({
          data: this.data,
          name: this.$route.name
        })
      }).catch((e) => {
        // TODO Add an error prompt here
        console.log(e)
      })
    },
    setDefaultSelectedOption () {
      this.selectedOption = this.options[0]
    }
  },
  created () {
    this.setDefaultSelectedOption()
  }
}
</script>
