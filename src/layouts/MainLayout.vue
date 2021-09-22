<template>
  <q-layout view="hhh lpR lff">
    <Loading />
    <q-header reveal elevated class="bg-white text-white">
      <NavBar />
    </q-header>

    <q-page-container>
      <router-view />
      <Footer />
      <ListFooter />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Loading: defineAsyncComponent(() =>
      import("components/beforLoading/BeforLoad.vue")
    ),
    NavBar: defineAsyncComponent(() =>
      import("components/mainLayout/navbar/Navbar.vue")
    ),
    Footer: defineAsyncComponent(() =>
      import("components/mainLayout/Footer/footer.vue")
    ),
    ListFooter: defineAsyncComponent(() =>
      import("components/mainLayout/Footer/listFooter.vue")
    ),
  },
  setup() {
    const $store = useStore();

    const toggleLeftDrawer = () => {
      $store.commit("MainLayout/toggleLeftDrawer");
    };

    return {
      toggleLeftDrawer,
    };
  },
};
</script>
