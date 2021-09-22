<template>
  <div class="q-pa-md row q-mt-sm">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-overline">{{ Over }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ Title }}</div>
        <div class="text-subitle">
          {{ lorem }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      Over: "Overline",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      Title: "Title",
    };
  },
};
</script>
<style scoped>
.my-card {
  min-width: 100%;
  height: 500px;
  background-image: url("https://cdn.quasar.dev/img/parallax2.jpg");
  background-repeat: no-repeat;
  /* background-position-x: 100%; */
  background-position-y: 30%;
  border-radius: unset;
  box-shadow: none;
  transition: 3s all;
  cursor: pointer;
  color: #000;
}
.my-card:hover {
  background-position-y: 100%;
}
.text-subitle {
  padding: 10px 0;
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.1px;
}
</style>
