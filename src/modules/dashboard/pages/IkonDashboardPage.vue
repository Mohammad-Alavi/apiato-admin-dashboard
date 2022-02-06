<template>
    <v-container fluid>
        <v-row>
            <v-col class="text-end" cols="12">
                <ikon-user-options/>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="py-0" cols="6">
                        analytics will be here!
            </v-col>
            <v-col cols="6">
                and a pie chart will be here!
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'IkonDashboardPage',
  components: {
    IkonUserOptions: () => import('@/modules/app/components/IkonUserOptions')
  }
}
</script>
