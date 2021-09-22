<template>
  <q-toolbar class="bg_1 q-px-lg row">
    <EssentialLink />
    <q-toolbar-title class="col-md-2 logo">
      <router-link to="/">
        <q-img
          src="~assets/images/logo.png"
          alt="Isomware"
          title="Isomware"
          class="logo_small"
        />
      </router-link>
    </q-toolbar-title>

    <div class="gt-sm col-md-9">
      <q-tabs>
        <q-route-tab to="/home" label="Creativity & Design" />
        <q-route-tab to="/About" label="PDF & E-signatures" />
        <q-route-tab to="/Products" label="Marketing & Commerce" />
        <q-route-tab to=/cards label="Help & Support" class="contact" />
      </q-tabs>
    </div>
    <div class="col-md-1 search q-pr-sm">
      <div class="text-black">
        <i class="fas fa-search text-black"></i>
        <span class="q-ml-sm">Sign In</span>
      </div>
    </div>
  </q-toolbar>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    EssentialLink: defineAsyncComponent(() =>
      import("components/mainLayout/navbar/EssentialLink.vue")
    ),
  },
  data() {
    return {};
  },
};
</script>

<style>
@media screen and (max-width: 1100px) {
  .logo {
    align-content: center;
    justify-content: center;
    display: flex;
  }
}
:root {
  --color_1: #a43994;
  --color_2: #f17420;
  --color_3: #393837;
}
.q-tab__label {
  color: #2c2c2c;
  font-weight: 600;
  font-size: 14px;
  text-transform: none;
}
.bg_1 {
  background: #fff;
  padding: 5px;
}

a {
  text-decoration: none;
}
.logo_small {
  width: 150px;
  height: 50px;
}
.q-btn .q-icon,
.q-btn .q-spinner {
  font-size: 2.715em;
}
.q-menu {
  transition: 0.5s all ease-out;
  font-size: 18px;
  border-radius: 0;
  max-width: 100vw !important;
  left: 0 !important;
}
.q-menu a {
  color: #000;
  text-decoration: none;
}

.q-position-engine {
  text-align: center;
  width: 100% !important;
  left: 0;
  top: 60px !important;
  background-color: #fff;
  box-shadow: none;
  padding: 20px;
}
.q-menu .q-icon {
  padding: 10px 0;
  padding-right: 10px;
}
.search {
  text-align: end;
}
</style>
