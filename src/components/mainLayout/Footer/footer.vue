<template>
  <hr />
  <div class="container">
    <div class="row">
      <div class="column1 col-md-4 col-sm-6 q-mb-lg">
        <div class="title">About IsomWare</div>
        <div class="body">
          <i class="fas fa-phone q-pt-lg"></i>
          <span class="q-pl-sm"> +905512005246 </span>
          <p class="icon_2">
            <i class="fas fa-envelope q-pr-sm"></i>
            isomware92@gmail.com
          </p>
        </div>
      </div>

      <div class="column2 col-md-4 col-sm-6 q-mb-sm">
        <div class="title q-pb-sm">Contact Us</div>
        <div class="body">
          <p class="icon_3">
            <i class="fas fa-map-marker-alt q-pr-sm"></i>
            Ağaoğlu my office 212 – Kat 2 – ofis 24 – Mahmutbey Mh. / Istanbul
          </p>
        </div>
      </div>

      <div class="column3 col-md-4 col-sm-6 q-mb-sm">
        <div class="logo">
          <p>Where we are working</p>
          <img src="Images/footer-map.png" alt="Images/footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
@media only screen and (min-width: 900px) {
  .container {
    padding-left: 150px;
    padding-right: 150px;
  }
}
.column1 .title,
.column2 .title,
.column3 .logo p {
  color: rgb(122, 120, 120);
  font-size: 20px;
  font-weight: bold;
}
.column1 .body,
.column2 .body {
  color: rgb(122, 120, 120);
  font-size: 14px;
  font-family: Times, serif;
}
.logo img {
  opacity: 0.5;
  background: rgb(122, 120, 120);
  padding: 5px;
  border-radius: 10px;
}
</style>
