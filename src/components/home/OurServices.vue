<template>
  <div class="row">
    <div class="col-md-4">
      <Card1 />
    </div>
    <div class="col-md-4">
      <Card1 />
    </div>
    <div class="col-md-4">
      <Card1 />
    </div>
    <div class="col-md-8">
      <Card2 />
    </div>
    <div class="col-md-4">
      <Card1 />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Card1: defineAsyncComponent(() => import("src/components/UI/Card1.vue")),
    Card2: defineAsyncComponent(() => import("src/components/UI/Card2.vue")),
  },
};
</script>
