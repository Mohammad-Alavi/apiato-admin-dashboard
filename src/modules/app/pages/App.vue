<template>
    <v-app v-if="$auth.ready()" id="app">
        <ikon-navigation-drawer v-if="showNavDrawer"/>
        <v-main>
            <v-container class="fill-height align-start" fluid>
                <router-view/>
            </v-container>
        </v-main>
        <ikon-snackbar/>
    </v-app>
    <v-app v-else id="app">
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-progress-circular indeterminate/>
                </v-row>
            </v-container>
        </v-main>
        <ikon-snackbar/>
    </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    IkonNavigationDrawer: () => import('@/modules/app/components/IkonNavigationDrawer'),
    IkonSnackbar: () => import('@/modules/app/components/IkonSnackbar')
  },
  computed: {
    isLoginPage () {
      return this.$route.name === 'login'
    },
    is404Page () {
      return this.$route.name === 'not-found'
    },
    is403Page () {
      return this.$route.name === 'forbidden'
    },
    showNavDrawer () {
      return !this.isLoginPage && !this.is403Page && !this.is404Page
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css');

#app {
    font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.w-100 {
    width: 100% !important;
}

.center-center {
    position: fixed !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>
