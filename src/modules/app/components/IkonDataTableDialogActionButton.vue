<template>
    <v-dialog v-model="showDialog" max-width="500px" persistent>

        <template
            v-if="(isEditMode)"
            v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon small>mdi-pencil</v-icon>
            </v-btn>
        </template>

        <template
            v-else-if="(isDeleteMode)"
            v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon small>mdi-delete</v-icon>
            </v-btn>
        </template>

        <template v-else-if="isAddMode" v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="primary">
                {{ buttonText }}
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="text-start text-wrap">
                {{ dialogTitle }}
            </v-card-title>

            <v-card-text>
                <slot/>
            </v-card-text>

            <v-card-actions>
                <v-spacer/>
                <v-btn text @click="cancel()">Cancel</v-btn>
                <v-btn :color='btnColor' :disabled="disabled" :loading="loading" text type="submit"
                       @click="confirm()">
                    {{ mode }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'IkonDataTableDialogActionButton',
  props: {
    dialogTitle: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      validator: function (value) {
        return ['add', 'edit', 'delete'].indexOf(value) !== -1
      }
    },
    buttonText: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    item: Object
  },
  data () {
    return {
      showDialog: false
    }
  },
  computed: {
    isAddMode () {
      return this.mode === 'add'
    },
    isEditMode () {
      return this.mode === 'edit'
    },
    isDeleteMode () {
      return this.mode === 'delete'
    },
    btnColor () {
      return this.isDeleteMode ? 'error' : ''
    }
  },
  watch: {
    showDialog (val) {
      !val || this.$emit('dialog-open')
    }
  },
  methods: {
    close () {
      this.showDialog = false
    },
    cancel () {
      this.close()
      this.$emit('cancel')
    },
    confirm () {
      this.$emit('confirm', this.close)
    }
  }
}
</script>
