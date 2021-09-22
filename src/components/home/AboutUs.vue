<template>
  <div class="background q-mt-sm q-mb-sm q-pa-md">
    <div class="container">
      <div class="row">
        <div class="col-md-6 content">
          <div class="Text_1">CONFERENCE</div>
          <p class="Text_2"><b> customer experience.</b></p>
          <p class="Text_3">Discover the latest innovations practices.</p>

          <div>
            <q-btn
              class="q-px-md q-py-sm"
              color="red"
              size="md"
              label="Watch now"
            />
          </div>
        </div>
        <div class="col-md-6"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.background {
  background-image: url("~assets/images/office-865091_960_720.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */
  width: 100%;
  height: 700px;
}
.background {
  background-image: url("~assets/images/office-865091_960_720.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */
  width: 100%;
  height: 700px;
}
.container {
  font-family: Arial, Helvetica, sans-serif;
  /* background: rgb(128, 126, 126); */
  /* backdrop-filter: sepia(90%); */
  color: rgb(255, 255, 255);
}
@media only screen and (min-width: 900px) {
  .container {
    padding-left: 150px;
    padding-right: 150px;
  }
}
@media only screen and (max-width: 600px) {
  .container {
    padding-left: 50px;
    padding-right: 50px;
  }
}
.content {
  margin: 20% 0;
  font-weight: 500;
}
.content .Text_1 {
  font-size: 18px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.content .Text_2 {
  font-size: 2.625rem;
  line-height: 2.75rem;
  padding-top: 20px;
  padding-bottom: 10px;
}
.content .Text_3 {
  font-size: 18px;
}
</style>
