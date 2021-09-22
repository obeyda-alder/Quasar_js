<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 content">
        <div class="Text_1">ADOBE SUMMIT—THE DIGITAL EXPERIENCE CONFERENCE</div>
        <p class="Text_2"><b> Explore the future of customer experience.</b></p>
        <p class="Text_3">
          Discover the latest innovations and best practices.
        </p>

        <div>
          <q-btn
            class="q-px-md q-py-sm"
            dense
            rounded
            color="primary"
            size="sm"
            label="Watch now"
          />
        </div>
      </div>
      <div class="col-md-6">
        <q-img class="animation" src="~assets/images/World-PNG-Clipart.png" />
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
.container {
  background: rgb(0, 0, 0);
  color: #fff;
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
  margin: 15% 0;
  font-weight: 700;
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
.animation {
  margin: 10% 0;
  -webkit-animation: spin 17s linear infinite;
  -moz-animation: spin 17s linear infinite;
  animation: spin 17s linear infinite;
}
@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
