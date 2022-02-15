<template>
  <div class="banner-image">
    <div class="banner-text">
      <h1>{{ $route.name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
}
</script>

<style scoped>
.banner-image {
  background-image: linear-gradient(rgba(220, 128, 69, 0.6), rgba(220, 128, 69, 0.6)), url("../../assets/images/banner.jpg");
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.banner-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>