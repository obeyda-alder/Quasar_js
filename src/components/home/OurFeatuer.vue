<template>
  <div class="row">
    <div class="col-md-4">
      <Card3 />
    </div>
    <div class="col-md-4">
      <Card3 />
    </div>
    <div class="col-md-4">
      <Card3 />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Card3: defineAsyncComponent(() => import("src/components/UI/Card3.vue")),
  },
};
</script>
