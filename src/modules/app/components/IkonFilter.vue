<script>
import { RESET_FILTER, SET_FILTER } from '@/modules/app/store/mutation-types'

export default {
  name: 'IkonFilter',
  data () {
    return {
      dialog: false,
      filter: null,
      filterComponentKey: 0
    }
  },
  watch: {
    $route (to, from) {
      if (from.name !== to.name) {
        this.resetFilters()
      }
    }
  },
  methods: {
    applyFilter () {
      this.$store.commit(SET_FILTER, this.$lodash.cloneDeep(this.filter))
      this.closeDialog()
    },
    clearFilter () {
      this.$store.commit(RESET_FILTER)
      this.resetFilters()
    },
    closeDialog () {
      this.dialog = false
    },
    cloneFilter () {
      this.filter = this.$lodash.cloneDeep(this.$store.state.filter)
    },
    resetFilters () {
      this.cloneFilter()
      this.reloadComponent()
      this.closeDialog()
    },
    reloadComponent () {
      this.filterComponentKey++
    }
  },
  created () {
    this.cloneFilter()
  }
}
</script>
