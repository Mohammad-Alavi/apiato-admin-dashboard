<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs"
             @click="$router.push({name: 'user-orders', params: {user_id: item.id, user: item}})"
             v-on="on">
        <v-icon small>mdi-receipt</v-icon>
      </v-btn>
    </template>
    <span>{{ $vuetify.lang.t('$vuetify.pages.users.viewOrders') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'IkonDataTableUserOrdersActionButton',
  props: {
    item: {
      required: true
    }
  }
}
</script>
