<template>
  <div class="loading">
    <div class="Text_1">welcome here</div>
    <div class="main_text">
      <p class="Text_2">
        <b> لديك عمل وتحاول إظهاره للجميع إذاً انت في المكان الصحيح</b>
      </p>
      <i class="fas fa-spinner fa-spin"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.setLoding();
  },
  methods: {
    setLoding() {
      setTimeout(() => {
        let lod = document.querySelector(".loading");
        lod.style.display = "none";
      }, 4000);
    },
  },
};
</script>
<style scoped>
.loading {
  position: absolute;
  background: radial-gradient(ellipse at bottom, #a43994, #f17420);
  text-align: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3000;
}

.fa-spinner {
  font-size: 25px;
  color: #fff;
}
.main_text {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.Text_1 {
  position: fixed;
  width: 100%;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  padding: 10px;
  background: rgba(119, 119, 119, 0.603);
  letter-spacing: 2.5px;
}
.Text_2 {
  font-family: sans-serif;
  color: #222;
  font-size: 22px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 8px;
}
</style>
