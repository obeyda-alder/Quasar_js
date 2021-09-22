<template>
  <div class="q-pa-md q-mt-sm">
    <q-card class="my-card" v-for="card in cards" :key="card.id">
      <div class="row">
        <div class="col-md-4">
          <q-card-section>
            <div class="Title_1">Over</div>
            <div class="body_1">Title</div>
            <div class="body_2">orem</div>
            <a href="#"><div class="Title_2">orem</div></a>
          </q-card-section>
        </div>
      </div>
      <img class="img" src="https://cdn.quasar.dev/img/mountains.jpg" />
    </q-card>
  </div>
</template>

<script>

  setup() {
    const $store = useStore();

    /* Data From Vuex Store */
    const datas = computed(() => {
      return $store.state.Product.Products;
    });

    return {
      datas,
    };
import {} from "quasar";
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.my-card {
  width: 400px;
  height: 500px;
  cursor: pointer;
  background: rgba(153, 153, 153, 0.171);
  border-radius: 0;
  box-shadow: none;
  border: none;
  color: #000000;
}
.img {
  /* padding: 20px; */
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 300px;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
