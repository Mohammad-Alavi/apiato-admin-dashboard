<template>
    <v-container class="indigo fill-height container" fluid>
        <div class="col-12 text-center">
            <h1 class="white--text">404</h1>
            <p class="white--text">
                {{ $vuetify.lang.t('$vuetify.pages.auth.takeMeBack') }}
                <router-link tag="a" to="/">
                    {{ $vuetify.lang.t('$vuetify.pages.auth.home') }}
                </router-link>
            </p>
        </div>
    </v-container>
</template>

<script>
export default {
  name: 'IkonNotFoundPage',
  data () {
    return {
      // TODO #159
      getSiteTitle: 'KURCC'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
    h1, p {
        font-size: 30px;
    }

    h1 {
        font-size: 200px;
    }

    p {
        a {
            text-decoration: underline #ffffff !important;
        }
    }
}
</style>
