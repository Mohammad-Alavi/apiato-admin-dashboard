<template>
    <v-navigation-drawer :right="$vuetify.rtl" app dark permanent stateless style="z-index:2; height:100%">
        <v-list nav>
            <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="text-start">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <!-- Example of submenu implementation -->

    <!--        <v-navigation-drawer v-if="currentlySelectedMenuItem && currentlySelectedMenuItem.items?.length" id="nav2"-->
    <!--                             v-model="rightMenu" absolute class="ml-sub-drawer" dark style="z-index:1" temporary>-->
    <!--            <v-list nav>-->
    <!--                <v-list-item>-->
    <!--                    <v-list-item-content>-->
    <!--                        <v-list-item-title class="title text-start">-->
    <!--                            {{ currentlySelectedMenuItem.title }}-->
    <!--                        </v-list-item-title>-->
    <!--                    </v-list-item-content>-->
    <!--                    <v-btn icon @click="closeSubMenu">-->
    <!--                        <v-icon>{{ 'mdi-close' }}</v-icon>-->
    <!--                    </v-btn>-->
    <!--                </v-list-item>-->
    <!--            </v-list>-->

    <!--            <v-divider></v-divider>-->

    <!--            <v-list>-->
    <!--                <v-list-item v-for="item in currentlySelectedMenuItem.items" :key="item.title" :to="item.to">-->
    <!--                    <v-list-item-content class="text-start">-->
    <!--                        <v-list-item-title>{{ item.title }}</v-list-item-title>-->
    <!--                    </v-list-item-content>-->
    <!--                </v-list-item>-->
    <!--            </v-list>-->
    <!--        </v-navigation-drawer>-->
</template>

<script>
export default {
  name: 'IkonNavigationDrawer',
  data () {
    return {
      rightMenu: false,
      currentlySelectedMenuItem: null,
      items: [
        new NavItem(this.$vuetify.lang.t('$vuetify.general.components.navigationDrawer.dashboard'), 'mdi-view-dashboard', { name: 'dashboard' }, []),
        new NavItem(this.$vuetify.lang.t('$vuetify.general.components.navigationDrawer.accounts'), 'mdi-account-search', { name: 'users' }, []),
        new NavItem(this.$vuetify.lang.t('$vuetify.general.components.navigationDrawer.providers'), 'mdi-account-star', { name: 'providers' }, []),
        new NavItem(this.$vuetify.lang.t('$vuetify.general.components.navigationDrawer.faqs'), 'mdi-frequently-asked-questions', { name: 'faqs' }, []),
        new NavItem(this.$vuetify.lang.t('$vuetify.general.components.navigationDrawer.faqGroups'), 'mdi-group', { name: 'faq-groups' }, []),
        new NavItem(this.$vuetify.lang.t('$vuetify.general.components.navigationDrawer.sliders'), 'mdi-view-carousel', { name: 'sliders' }, []),
        new NavItem(this.$vuetify.lang.t('$vuetify.general.components.navigationDrawer.verificationRequests'), 'mdi-check-decagram', { name: 'requests' }, []),
        new NavItem(this.$vuetify.lang.t('$vuetify.general.components.navigationDrawer.sports'), 'mdi-run', { name: 'sports' }, []),
        new NavItem(this.$vuetify.lang.t('$vuetify.general.components.navigationDrawer.jobs'), 'mdi-briefcase', { name: 'jobs' }, []),
        new NavItem(this.$vuetify.lang.t('$vuetify.general.components.navigationDrawer.skills'), 'mdi-flash', { name: 'skills' }, []),
        new NavItem(this.$vuetify.lang.t('$vuetify.general.components.navigationDrawer.ratings'), 'mdi-scoreboard', { name: 'ratings' }, [])
      ]
    }
  },
  methods: {
    // Example of submenu implementation
    // mainNavItemClick(item) {
    //     this.currentlySelectedMenuItem = item;
    //     this.rightMenu = true;
    //     this.navigate(item.to);
    // },
    // closeSubMenu() {
    //     this.rightMenu = false;
    // }
  }
}

class NavItem {
  constructor (title, icon, to, children = []) {
    this.title = title
    this.icon = icon
    this.to = to
    this.children = children
  }
}
</script>

<style scoped>
/* Style of example of submenu implementation
.ml-sub-drawer {
    margin-left: 256px;
}
*/
</style>
