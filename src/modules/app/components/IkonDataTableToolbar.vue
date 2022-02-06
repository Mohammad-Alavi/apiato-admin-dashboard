<template>
    <v-toolbar flat>
        <v-row justify="space-between" no-gutters>
            <v-col align-self="center" cols="auto">
                <v-toolbar-title>{{ title }}</v-toolbar-title>
            </v-col>
            <v-divider class="mx-5 my-2" vertical/>
            <v-col align-self="baseline" cols="auto">
                <slot name="search"/>
            </v-col>
            <v-spacer/>
            <v-col align-self="center" cols="auto">
                <slot/>
            </v-col>
        </v-row>
    </v-toolbar>
</template>

<script>
export default {
  name: 'IkonDataTableToolbar',
  props: {
    title: {
      type: String
    }
  }
}
</script>
