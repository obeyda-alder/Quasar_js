<template>
  <div class="bg">
    <hr />
    <div class="container">
      <div class="row">
        <div class="col-md-6 q-mb-xs q-mt-xs">
          <div class="social_media">
            <a href="https://www.facebook.com/isomware/" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://twitter.com/isomware" target="_blank">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="isomware@protonmail.com" target="_blank"
              ><i class="fab fa-google-plus-square"></i
            ></a>
            <a href="https://www.instagram.com/isomware" target="_blank">
              <i class="fab fa-instagram-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/eslam-takeyeldin-388326209"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=905512005246"
              target="_blank"
            >
              <i class="fab fa-whatsapp-square"></i>
            </a>
          </div>
        </div>
        <div class="col-md-6 q-mb-xs q-mt-xs">
          <span class="Copyright q-mt-xs">
            Copyright ©{{ new Date().getFullYear() }} Isomware. All rights
            reserved.
          </span>
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
.social_media a i {
  margin-right: 12px;
  font-size: 30px;
  color: rgb(122, 120, 120);
}
.Copyright {
  display: flex;
  justify-content: center;
  font-size: 13px;
}
</style>
