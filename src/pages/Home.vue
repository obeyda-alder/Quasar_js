<template>
  <q-page>
    <LandingSection />
    <OurServices />
    <AboutUs />
    <OurFeatuer />
  </q-page>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    LandingSection: defineAsyncComponent(() =>
      import("components/home/LandingSection.vue")
    ),
    OurServices: defineAsyncComponent(() =>
      import("components/home/OurServices.vue")
    ),
    AboutUs: defineAsyncComponent(() =>
      import("src/components/home/AboutUs.vue")
    ),
    OurFeatuer: defineAsyncComponent(() =>
      import("components/home/OurFeatuer.vue")
    ),
  },
};
</script>
