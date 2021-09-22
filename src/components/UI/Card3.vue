<template>
  <div class="q-pa-md row q-mt-sm">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-overline text-orange">{{ Over }}</div>
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
      Over: "PRODUCT",
      Title: "Real-time customer data platform.",
      lorem:
        "Deliver personalized experiences at scale with actionable, up-to-date profiles.",
    };
  },
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 400px;
  height: 500px;
  background-image: url("https://cdn.quasar.dev/img/parallax1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 40%;
  border-radius: unset;
  box-shadow: none;
  transition: 2s all;
  cursor: pointer;
  color: rgb(0, 0, 0);
}
.my-card:hover {
  background-position-x: 100%;
}
.text-subitle {
  padding: 10px 0;
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.1px;
}
</style>
